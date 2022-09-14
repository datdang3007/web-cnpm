$(document).ready(function () {
  $(".cart-icon").click(function (e) {
    e.preventDefault();
    $(".wrapper-drop-dwon-cart").animate({
      transform: "translate(0)",
    });
  });
});
