$(document).ready(function () {
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
  $(".drop-down-cart").click(function (e) {
    e.preventDefault();
    closeCart();
    console.log("con cac");
  });
  $(".btn-close-cart").click(function (e) {
    e.preventDefault();
    closeCart();
    console.log("con cac");
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
  $(".quantity-input-cart").change(function (e) {
    e.preventDefault();
    let inputChange = +e.target.value;
    console.log("inputChange:", inputChange);
    if (inputChange < 1 || inputChange >= 1000) {
      $(this).val("1");
    }
  });
});
