import dataProduct from "./dataProduct.js";

$(document).ready(function () {
  $(".btnAddToCart").click(function (e) {
    e.preventDefault();

    const getValue = dataProduct.filter((val) => val.id == $(this).data("id"));
    console.log("getValue:", getValue);
  });
});
