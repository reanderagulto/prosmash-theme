 $(document).ready(function () {
    // Initially show all accordion contents
    $('.accordion-content').show();
    $('.accordion-title').addClass('active');

    // Toggle accordion on title click
    $('.accordion-title').on('click', function () {
      const $title = $(this);
      const $content = $title.next('.accordion-content');
      const $caret = $title.find('.accordion-caret');

      // Toggle visibility
      $content.slideToggle(200);
      $title.toggleClass('active');

      // Rotate caret (toggle up/down)
      $caret.toggleClass('rotated');
    });
  });