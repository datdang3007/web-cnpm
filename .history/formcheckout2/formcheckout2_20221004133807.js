const cart = JSON.parse(localStorage.getItem("cart"));
const userid = JSON.parse(localStorage.getItem("user-checkout"));
console.log("user-checkout:", userid);
let totalCart = 0;
console.log("cart:", cart);
renderProduct();
$(document).ready(function () {
  fetch("https://getuser.vercel.app/api/getAllBills")
    .then((data) => data.json())
    .then((result) => {
      console.log(result);
    });

  $(".btn-submit").click(function (e) {
    e.preventDefault();
    console.log("con cac");
  });
});

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
