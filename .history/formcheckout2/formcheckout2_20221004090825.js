const cart = JSON.parse(localStorage.getItem("cart"));
let totalCart = 0;
console.log("cart:", cart);
renderProduct();
$(document).ready(function () {});

function renderProduct() {
  $(".products").html("");
  cart.forEach((val) => {
    $(".products").append(`
                            <div class="product">
                                <div class="wrapper-product">
                                    <img src=${val.img}
                                        alt="">
                                    <div class="content">
                                        <div class="name">${val.name}</div>
                                        <div class="category-quantity">
                                            <div class="category">${val.category}</div>
                                            <div class="quantity">x${val.quantity}</div>
                                        </div>
                                    </div>
                                </div>
                                <div class="product-total">$${val.total}</div>
                            </div>       
    `);
    totalCart += val.total;
  });
  $(".subtotal-detail").html(`$${totalCart}`);
}
