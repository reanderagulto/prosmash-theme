$(document).on(
  "change",
  '.mdp-option-swatches input[type="radio"]',
  function () {
    const $radio = $(this);
    const selectedValue = $radio.val();
    const optionName = $radio.attr("name"); // e.g., "option1"

    // Find matching select box by data-index (e.g., option1)
    const $select = $('select[data-index="' + optionName + '"]');

    if ($select.length) {
      $select.val(selectedValue).trigger("change");
    }
  },
);

// Generic wishlist button listener
$(document).on("click", function (event) {
  const target = event.target;
  const button = $(target).closest("button, div")[0];

  if (
    button &&
    button.innerText &&
    button.innerText.includes("ADD TO WISHLIST")
  ) {
    console.log("Wishlist button clicked!");

    // Get product handle from URL
    const productHandle = window.location.pathname.split("/")[2];
    let wishlist = JSON.parse(localStorage.getItem("mdp-wishlist") || "{}");

    if (productHandle in wishlist) {
      delete wishlist[productHandle];
      $(button).removeClass("mdp-added");
    } else {
      wishlist[productHandle] = "added";
      $(button).addClass("mdp-added");

      // Show popup
      const existingPopup = $("#wishlist-popup");
      if (existingPopup.length > 0) {
        existingPopup.remove();
      }

      const popup = $(
        '<div id="wishlist-popup" class="wishlist-popup">Product added to wishlist!</div>',
      );
      $("body").append(popup);
      popup
        .fadeIn(300)
        .delay(2000)
        .fadeOut(300, function () {
          $(this).remove();
        });
    }

    localStorage.setItem("mdp-wishlist", JSON.stringify(wishlist));
  }
});

// Initialize wishlist button state on page load
$(document).ready(function () {
  const productHandle = window.location.pathname.split("/")[2];
  const wishlist = JSON.parse(localStorage.getItem("mdp-wishlist") || "{}");

  if (productHandle in wishlist) {
    $("*")
      .filter(function () {
        return $(this).text().includes("ADD TO WISHLIST");
      })
      .addClass("mdp-added");
  }
});
