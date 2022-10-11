$(document).ready(function () {
  $(".wrapper-form-password").click(function (e) {
    e.stopPropagation();
  });
  $(".btn-change-password").click(function (e) {
    e.preventDefault();
    $(".backgr").css({
      opacity: 1,
      visibility: "visible",
    });
  });
  $(".backgr").click(function (e) {
    e.preventDefault();
    $(this).css({
      opacity: 0,
      visibility: "hidden",
    });
  });
  $(".btn-close").click(function (e) {
    e.preventDefault();
    $(".backgr").css({
      opacity: 0,
      visibility: "hidden",
    });
  });
});
