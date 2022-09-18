import dataProduct from "./dataProduct.js";

let cart = [];

$(document).ready(function () {
  $(".btnAddToCart").click(function (e) {
    e.preventDefault();

    const getValue = dataProduct.filter((val) => val.id == $(this).data("id"));
    cart.push({
      img: getValue.image,
      name: getValue.name,
      price: getValue.price,
      id: getValue.id,
    });
    console.log("getValue:", getValue);
  });
});
