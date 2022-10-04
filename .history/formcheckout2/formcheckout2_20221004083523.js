const cart = JSON.parse(localStorage.getItem("cart"));
renderProduct();
$(document).ready(function () {});

function renderProduct() {
  $(".products").html("");
  cart.forEach((val) => {
    $(".products").append(`
                            <div class="product">
                                <div class="wrapper-product">
                                    <img src="https://res.cloudinary.com/sivadass/image/upload/v1493620046/dummy-products/cucumber.jpg"
                                        alt="">
                                    <div class="content">
                                        <div class="name">Cucmber</div>
                                        <div class="category-quantity">
                                            <div class="category">vegetable</div>
                                            <div class="quantity">x3 </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="product-total">$400</div>
                            </div>       
    `);
  });
}
