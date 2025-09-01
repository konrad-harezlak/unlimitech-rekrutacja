$(document).ready(function () {
  const cartButton = $(".main-header__cart");
  const cartPopup = $("#cart-popup");
  const closeCartButton = $("#close-cart-btn");

  cartButton.on("click", function () {
    console.log("Działa");
    cartPopup.removeClass("d-none").addClass("d-flex");
    setTimeout(function () {
      cartPopup.addClass("cart-popup--visible");
    }, 100);
  });
  closeCartButton.on("click", function () {
    cartPopup.removeClass("cart-popup--visible");
    setTimeout(function () {
      cartPopup.addClass("d-none").removeClass("d-flex");
    }, 100);
  });

  cartPopup.on("click", function (event) {
    if ($(event.target).is(cartPopup)) {
      cartPopup.removeClass("cart-popup--visible");
      setTimeout(function () {
        cartPopup.addClass("d-none").removeClass("d-flex");
      }, 100);
    }
  });
});
