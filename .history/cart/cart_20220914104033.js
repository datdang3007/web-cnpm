$(document).ready(function () {
  $(".cart-icon").click(function (e) {
    e.preventDefault();
    $(".wrapper-drop-dwon-cart").css({
      transform: "translateX(0)",
    });
    $(".drop-down-cart").animate(
      {
        opasity: "1",
        visibility: "visibale",
      },
      300
    );
  });
  $(selector).click(function (e) {
    e.preventDefault();
  });
  $(".wrapper-drop-dwon-cart").click(function (e) {
    e.preventDefault();
    e.stopPropagation();
  });
});
