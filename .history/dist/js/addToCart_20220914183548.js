$(document).ready(function () {
  $(".btnAddToCart").click(function (e) {
    e.preventDefault();
    const getValue = productsDB.filter((val) => val.id == $(this).data("id"));
    console.log("getValue:", getValue);
  });
});
