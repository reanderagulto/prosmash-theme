if (window.location.pathname.indexOf('/collections/') === -1) {
  $('.player-card-link').on('click', function (e) {
    if ($(this).is('a')) return; // Let homepage links work normally

    e.preventDefault();
    const index = $('.player-kit-cards-container .player-card-link').index(this);
    $('.player-kit-cards-container').slick('slickGoTo', index);
  });
}
