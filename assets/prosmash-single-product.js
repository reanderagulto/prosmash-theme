$(document).on('change', '.mdp-option-swatches input[type="radio"]', function () {
  const $radio = $(this);
  const selectedValue = $radio.val();
  const optionName = $radio.attr('name'); // e.g., "option1"

  // Find matching select box by data-index (e.g., option1)
  const $select = $('select[data-index="' + optionName + '"]');

  if ($select.length) {
    $select.val(selectedValue).trigger('change');
  }
});
