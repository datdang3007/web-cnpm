// import dataProduct from "./dataProduct";
console.log("dataProduct:", dataProduct);

$(document).ready(function () {
  $(".btnAddToCart").click(function (e) {
    e.preventDefault();

    const getValue = dataProduct;
    console.log("getValue:", getValue);
  });
});
