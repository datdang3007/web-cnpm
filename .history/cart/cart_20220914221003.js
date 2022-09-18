import dataProduct from "../dist/js/dataProduct.js";

let cart = [];

$(document).ready(function () {
  //--------click cart show -----------
  $(".cart-icon").click(function (e) {
    e.preventDefault();
    $(".wrapper-drop-dwon-cart").css({
      transform: "translateX(0)",
      transition: "0.3s",
    });
    $(".drop-down-cart").css(
      {
        opacity: "1",
        visibility: "visible",
        transition: "0.3s",
      },
      300
    );
  });

  $(".wrapper-drop-dwon-cart").click(function (e) {
    e.preventDefault();
    e.stopPropagation();
  });

  // ---------- close cart ---------------
  $(".drop-down-cart").click(function (e) {
    e.preventDefault();
    closeCart();
  });
  $(".btn-close-cart").click(function (e) {
    e.preventDefault();
    closeCart();
  });

  function closeCart() {
    $(".wrapper-drop-dwon-cart").css({
      transform: "translateX(100%)",
      transition: "0.3s",
    });
    $(".drop-down-cart").css(
      {
        opacity: "0",
        visibility: "hidden",
        transition: "0.3s",
      },
      300
    );
  }

  // check input quantity cart
  $(".quantity-input-cart").change(function (e) {
    e.preventDefault();
    let inputChange = +e.target.value;
    console.log("inputChange:", inputChange);
    if (inputChange < 1 || inputChange > 1000) {
      $(this).val("1");
    }
  });

  //-------- click btn plus ---------
  $(".plus").click(function (e) {
    e.preventDefault();
    const getInputQuantity = $(this).parent().find(".quantity-input-cart");
    const getQuantity = getInputQuantity.val();
    if (+getQuantity < 1000) {
      getInputQuantity.val(`${+getQuantity + 1}`);
    }
  });

  // ----------- click btn minus -----------
  $(".plus").click(function (e) {
    e.preventDefault();
    const getInputQuantity = $(this).parent().find(".quantity-input-cart");
    const getQuantity = getInputQuantity.val();
    if (+getQuantity > 1) {
      getInputQuantity.val(`${+getQuantity - 1}`);
    }
  });

  //-------- add to cart ----------
  $(document).ready(function () {
    $(".btnAddToCart").click(function (e) {
      e.preventDefault();

      const getValue = dataProduct.filter(
        (val) => val.id == $(this).data("id")
      );
      cart.push({
        img: getValue[0].image,
        name: getValue[0].name,
        price: getValue[0].price,
        id: getValue[0].id,
        quantity: 1,
        total: getValue[0].price,
      });
    });
  });
});
