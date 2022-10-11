$(document).ready(function () {
  $(".wrapper-form-password").click(function (e) {
    e.stopPropagation();
  });
  $(".profile").click(function (e) {
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
  $(".wrapper-profile").click(function (e) {
    $(".handle-profile").css({
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
