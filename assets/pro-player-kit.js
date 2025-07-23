;
(function ($, w, d, h, b) {
    var app = {
        playerCardCarousel: function (startIndex = 0) {
            $('.player-kit-cards-container').slick({
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                centerMode: false,
                arrows: true,
                dots: false,
                initialSlide: startIndex,
                prevArrow: $('.nav-buttons .slick-prev'),
                nextArrow: $('.nav-buttons .slick-next'),
                responsive: [
                    { breakpoint: 1025, settings: { slidesToShow: 2 } },
                    { breakpoint: 768, settings: { slidesToShow: 1 } },
                    { breakpoint: 480, settings: { slidesToShow: 1 } }
                ]
            });
        },

        loadMoreBtn: function () {
            function initLoadMore(targetSelector, initialVisible = 8) {
                const grid = document.querySelector(targetSelector);
                if (!grid) return;

                const items = grid.querySelectorAll('.product-item');
                let visibleCount = 0;

                for (let i = 0; i < Math.min(initialVisible, items.length); i++) {
                    items[i].style.display = '';
                    visibleCount++;
                }

                const btn = document.querySelector(`.load-more[data-target="${targetSelector}"]`);
                if (!btn) return;

                btn.addEventListener('click', function () {
                    let shown = 0;
                    for (let i = visibleCount; i < items.length && shown < initialVisible; i++) {
                        items[i].style.display = '';
                        shown++;
                        visibleCount++;
                    }
                    if (visibleCount >= items.length) {
                        btn.parentElement.remove();
                    }
                });
            }

            initLoadMore('.preferred-set-grid');
            initLoadMore('.shop-look-grid');
        },

        updateAllContent: function () {
            const $slider = $('.player-kit-cards-container');
            const $playerName = $('.player-name');
            const $playerDesc = $('.player-desc');

            $slider.on('init reInit afterChange', function (event, slick, currentSlide) {
                const $currentSlide = slick.$slides.eq(currentSlide);
                const playerName = $currentSlide.data('player-name') || '';
                const playerDesc = $currentSlide.data('player-desc') || '';
                const playerHandle = $currentSlide.data('player-handle') || '';

                $playerName.text(playerName);
                $playerDesc.html(playerDesc);

                app.updatePreferredSet(playerName);
                app.updateShopTheLook(playerName);
                app.updateURL(playerHandle);
            });

            // Manual trigger after Slick loads
            const $initial = $('.player-kit-cards-container .slick-current');
            const initName = $initial.data('player-name');
            const initDesc = $initial.data('player-desc');
            const initHandle = $initial.data('player-handle');

            $playerName.text(initName);
            $playerDesc.html(initDesc);
            app.updatePreferredSet(initName);
            app.updateShopTheLook(initName);
            app.updateURL(initHandle);
        },

        updatePreferredSet: function (playerName) {
            $('.player-preferred-set').hide();
            $(`.player-preferred-set[data-player="${playerName}"]`).show();
        },

        updateShopTheLook: function (playerName) {
            $('.player-shop-the-look').hide();
            $(`.player-shop-the-look[data-player="${playerName}"]`).show();
        },

        updateURL: function (playerHandle) {
            if (!playerHandle) return;
            const newUrl = `/collections/${playerHandle}`;
            const newTitle = `${playerHandle.replace(/-/g, ' ')} | Player Kit`;
            window.history.pushState({ path: newUrl }, newTitle, newUrl);
        },

        init: function () {
            this.playerCardCarousel();
            this.loadMoreBtn();
            this.updateAllContent();
        }
    };

    $(document).ready(function () {
        app.init();
    });

})(jQuery, window, document, 'html', 'body');
