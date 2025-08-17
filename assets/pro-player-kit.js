/* pro-player-kit.js */
;(function ($, w, d) {
  const SECTION_IDS = {
    preferredSet: 'player-preferred-set',
    shopTheLook:  'player-shop-the-look'
  };

  const S = {
    slider: '.player-kit-cards-container',
    slideAnchor: '.player-card-link',
    name: '.player-name',
    desc: '.player-desc',
    prev: '.nav-buttons .slick-prev',
    next: '.nav-buttons .slick-next',
    mountPref: '#preferred-set-mount',
    mountLook: '#shop-look-mount'
  };

  // If you want versioned caching later, set CACHE_VERSION to a new value and
  // swap fetch URL to use &v=CACHE_VERSION and Map-based caching.
  // For now (to ensure fresh HTML), we won’t reuse cache.
  // const CACHE_VERSION = 'v1';
  // const cache = new Map();

  const app = {
    getHandleFromURL() {
      const parts = w.location.pathname.replace(/\/+$/, '').split('/');
      const i = parts.indexOf('collections');
      return i >= 0 && parts[i + 1] ? parts[i + 1] : null;
    },

    updateURL(handle, replace = false) {
      if (!handle) return;
      const url = `/collections/${handle}`;
      const title = `${handle.replace(/-/g, ' ')} | Player Kit`;
      if (replace) history.replaceState({ handle }, title, url);
      else if (w.location.pathname !== url) history.pushState({ handle }, title, url);
    },

    onImagesLoaded($scope, cb) {
      const $imgs = $scope.find('img');
      let left = $imgs.length;
      if (!left) return cb();
      $imgs.each(function () {
        if (this.complete) { if (--left === 0) cb(); }
        else $(this).one('load error', () => { if (--left === 0) cb(); });
      });
    },

    equalizeHeights() {
      const $cards = $('.player-container');
      let max = 0;
      $cards.css('height', 'auto').each(function () {
        const h = $(this).outerHeight();
        if (h > max) max = h;
      });
      $cards.css('height', max + 'px');
    },

    skeletonHTML() {
      return '<div class="skeleton skeleton--grid" aria-hidden="true"></div>';
    },

    async fetchSectionHTML(handle, sectionId) {
      // DEV: Always fetch fresh to avoid stale cached HTML during setup
      // If you prefer versioned caching, append &v=CACHE_VERSION and use a Map.
      const res = await fetch(
        `/collections/${handle}?section_id=${encodeURIComponent(sectionId)}&v=${Date.now()}`,
        { credentials: 'same-origin' }
      );
      if (!res.ok) return '';
      return await res.text();
    },

    async renderPanelsFor(handle) {
      if (!handle) return;
      const prefMount = d.querySelector(S.mountPref);
      const lookMount = d.querySelector(S.mountLook);

      if (prefMount) prefMount.innerHTML = this.skeletonHTML();
      if (lookMount) lookMount.innerHTML = this.skeletonHTML();

      const [prefHTML, lookHTML] = await Promise.all([
        this.fetchSectionHTML(handle, SECTION_IDS.preferredSet),
        this.fetchSectionHTML(handle, SECTION_IDS.shopTheLook)
      ]);

      if (prefMount && typeof prefHTML === 'string') prefMount.innerHTML = prefHTML;
      if (lookMount && typeof lookHTML === 'string') lookMount.innerHTML = lookHTML;
    },

    // If slick slide *is* the anchor, return it; else find it inside.
    getAnchorFromSlide($slide) {
      return $slide.is(S.slideAnchor) ? $slide : $slide.find(S.slideAnchor).first();
    },

    initCarousel(startIndex) {
      const $slider = $(S.slider);

      $slider
        .on('init', (e, slick) => {
          const $slide = slick.$slides.eq(slick.currentSlide || 0);
          const $a = app.getAnchorFromSlide($slide);
          const handle = $a.data('player-handle') || '';
          const name   = $a.data('player-name') || '';
          const desc   = $a.data('player-desc') || '';

          $(S.name).text(name);
          $(S.desc).html(desc);
          app.renderPanelsFor(handle);
          app.updateURL(handle, true);

          app.onImagesLoaded($slider, app.equalizeHeights);
        })
        .on('setPosition', () => {
          app.onImagesLoaded($slider, app.equalizeHeights);
        })
        .on('afterChange', (e, slick, currentSlide) => {
          const $slide = slick.$slides.eq(currentSlide);
          const $a = app.getAnchorFromSlide($slide);
          const handle = $a.data('player-handle') || '';
          const name   = $a.data('player-name') || '';
          const desc   = $a.data('player-desc') || '';

          $(S.name).text(name);
          $(S.desc).html(desc);
          app.renderPanelsFor(handle);
          app.updateURL(handle);
        })
        .slick({
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          centerMode: false,
          arrows: true,
          dots: false,
          initialSlide: startIndex || 0,
          prevArrow: $(S.prev),
          nextArrow: $(S.next),
          responsive: [
            { breakpoint: 1025, settings: { slidesToShow: 2 } },
            { breakpoint: 768,  settings: { slidesToShow: 1 } },
            { breakpoint: 480,  settings: { slidesToShow: 1 } }
          ]
        });

      $(w).on('resize', () => app.onImagesLoaded($slider, app.equalizeHeights));

      w.addEventListener('popstate', () => {
        const handle = app.getHandleFromURL();
        if (!handle) return;
        const idx = $(S.slideAnchor).toArray()
          .findIndex(el => el.dataset.playerHandle === handle);
        if (idx >= 0) $(S.slider).slick('slickGoTo', idx, true);
      });
    },

    init() {
      const currentHandle = this.getHandleFromURL();
      let startIndex = 0;
      $(S.slideAnchor).each(function (i) {
        if (this.dataset.playerHandle === currentHandle) {
          startIndex = i;
          return false;
        }
      });

      this.initCarousel(startIndex);

      // Safety: sync once more after Slick init
      const $initial = $('.slick-initialized .slick-current');
      if ($initial.length) {
        const $a = this.getAnchorFromSlide($initial);
        const initHandle = $a.data('player-handle') || '';
        const initName   = $a.data('player-name') || '';
        const initDesc   = $a.data('player-desc') || '';
        $(S.name).text(initName);
        $(S.desc).html(initDesc);
        this.renderPanelsFor(initHandle);
        this.updateURL(initHandle, true);
      }
    }
  };

  $(d).ready(() => app.init());
})(jQuery, window, document);

// Delegated "Load more" handler — works for dynamically injected sections
document.addEventListener('click', function (e) {
  const btn = e.target.closest('.load-more');
  if (!btn) return;

  const targetSelector = btn.getAttribute('data-target');
  const chunk = Math.max(parseInt(btn.getAttribute('data-chunk') || '8', 10), 1);
  const grid = document.querySelector(targetSelector);
  if (!grid) return;

  const hidden = grid.querySelectorAll('.product-item.hidden');
  let shown = 0;
  hidden.forEach((item) => {
    if (shown >= chunk) return;
    item.classList.remove('hidden');
    // ALSO clear any inline display:none that may have been added in Liquid
    if (item.style && item.style.display === 'none') {
      item.style.display = '';
    }
    shown++;
  });

  // Remove the button if nothing left to show
  if (grid.querySelectorAll('.product-item.hidden').length === 0) {
    (btn.parentElement || btn).remove();
  }
});
