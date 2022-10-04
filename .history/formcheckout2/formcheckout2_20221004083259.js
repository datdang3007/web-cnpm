const cart = JSON.parse(localStorage.getItem("cart"));
renderProduct();
$(document).ready(function () {});

function renderProduct() {
  $(".products").html("");
}
