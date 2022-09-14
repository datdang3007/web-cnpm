$(document).ready(function () {
  $(".cart-icon").click(function (e) {
    e.preventDefault();
    $(".wrapper-drop-dwon-cart").animate({
      transition: "translate(0)",
    });
  });
});
