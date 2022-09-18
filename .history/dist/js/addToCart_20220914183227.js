$(document).ready(function () {
  $(".btnAddToCart").click(function (e) {
    e.preventDefault();
    console.log($(this).data("id"));
  });
});
