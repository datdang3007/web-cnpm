import dataProduct from "./dataProduct.js";

let cart = [];

$(document).ready(function () {
  $(".btnAddToCart").click(function (e) {
    e.preventDefault();

    const getValue = dataProduct.filter((val) => val.id == $(this).data("id"));
    cart.push({
      img: getValue[0].image,
      name: getValue[0].name,
      price: getValue[0].price,
      id: getValue[0].id,
      quantity: 1,
    });
    console.log("getValue:", getValue[0].image);
    console.log(cart);
  });
});
