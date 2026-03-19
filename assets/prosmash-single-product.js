console.log("prosmash-single-product.js loaded!");

$(document).on(
  "change",
  '.mdp-option-swatches input[type="radio"]',
  function () {
    const $radio = $(this);
    const selectedValue = $radio.val();
    const optionName = $radio.attr("name"); // e.g., "option1"

    const $select = $('select[data-index="' + optionName + '"]');
    if ($select.length) $select.val(selectedValue).trigger("change");
  },
);

function mdpGetCustomerIdFromEl($el) {
  const id = $el?.attr?.("data-customer-id") || $el?.data?.("customer-id");
  const trimmed = typeof id === "string" ? id.trim() : id;
  if (!trimmed) return null;
  return String(trimmed);
}

function mdpWishlistTempKey() {
  return "mdp-wishlist-temp";
}

function mdpWishlistKeyForCustomerId(customerId) {
  if (!customerId) return mdpWishlistTempKey();
  return `mdp-wishlist-customer-${customerId}`;
}

function mdpReadWishlist(key) {
  try {
    return JSON.parse(localStorage.getItem(key) || "{}") || {};
  } catch (e) {
    return {};
  }
}

function mdpWriteWishlist(key, wishlist) {
  localStorage.setItem(key, JSON.stringify(wishlist || {}));
}

function mdpMergeWishlist(intoKey, fromKey) {
  const from = mdpReadWishlist(fromKey);
  const into = mdpReadWishlist(intoKey);
  const merged = { ...into, ...from };
  mdpWriteWishlist(intoKey, merged);
  localStorage.removeItem(fromKey);
  return merged;
}

function mdpEnsureWishlistSyncedForLoggedIn($el) {
  const customerId = mdpGetCustomerIdFromEl($el);
  if (!customerId) return;
  mdpMergeWishlist(
    mdpWishlistKeyForCustomerId(customerId),
    mdpWishlistTempKey(),
  );
}

function mdpIsInWishlist(wishlist, handle) {
  return Boolean(handle && wishlist && handle in wishlist);
}

function mdpSetWishlistButtonState($btn, isAdded) {
  $btn.toggleClass("mdp-added", Boolean(isAdded));
}

$(document).on("click", ".mdp-add-to-wishlist", function (event) {
  event.preventDefault();
  console.log("Wishlist button clicked!");

  const $btn = $(this);
  const productHandle = $btn.data("product-handle");
  console.log("Product handle:", productHandle);

  if (!productHandle) return;

  const customerId = mdpGetCustomerIdFromEl($btn);
  console.log("Customer ID:", customerId);

  if (customerId) {
    mdpEnsureWishlistSyncedForLoggedIn($btn);
  }

  const storageKey = mdpWishlistKeyForCustomerId(customerId);
  console.log("Storage key:", storageKey);

  const wishlist = mdpReadWishlist(storageKey);
  console.log("Current wishlist:", wishlist);

  if (mdpIsInWishlist(wishlist, productHandle)) {
    delete wishlist[productHandle];
    mdpWriteWishlist(storageKey, wishlist);
    console.log("Product removed from wishlist");
    return;
  }

  wishlist[productHandle] = "added";
  mdpWriteWishlist(storageKey, wishlist);
  mdpSetWishlistButtonState($btn, true);
  console.log("Product added to wishlist");

  const existingPopup = $("#wishlist-popup");
  if (existingPopup.length > 0) existingPopup.remove();

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
});

$(document).ready(function () {
  const $btn = $(".mdp-add-to-wishlist").first();
  if ($btn.length) mdpEnsureWishlistSyncedForLoggedIn($btn);

  const customerId = mdpGetCustomerIdFromEl($btn);
  const storageKey = mdpWishlistKeyForCustomerId(customerId);
  const wishlist = mdpReadWishlist(storageKey);

  $(".mdp-add-to-wishlist").each(function () {
    const $b = $(this);
    const handle = $b.data("product-handle");
    mdpSetWishlistButtonState($b, mdpIsInWishlist(wishlist, handle));
  });
});
