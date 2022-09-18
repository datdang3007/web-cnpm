import productsDB from "../json/products.json" assert { type: "json" };
console.log("dataProduct:", productsDB);

$(document).ready(function () {
  $(".btnAddToCart").click(function (e) {
    e.preventDefault();

    const getValue = productsDB;
    console.log("getValue:", getValue);
  });
});
