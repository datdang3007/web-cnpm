const cart = JSON.parse(localStorage.getItem("cart"));
const iduser = JSON.parse(localStorage.getItem("user-checkout"));
console.log("user-checkout:", iduser);
let totalCart = 0;
if (iduser) {
  $("body").prepend(`
      <div class="form-loading">
      <ul>
          <li></li>
          <li></li>
          <li></li>
      </ul>
      </div>`);
  const getdataUser = `https://getuser.vercel.app/api/getAUser/${iduser}`;
  fetch(getdataUser)
    .then((data) => data.json())
    .then((result) => {
      if (checkLoadPduct) {
        // go to renerPdoructs() to detail
        $("body").find(".form-loading").remove();
      } else {
        checkLoadUser = true;
      }
      renderCartsUser(result);
    })
    .catch((err) => {
      alert("Something was wrong", err);
      $("body").find(".form-loading").remove();
    });
}
renderProduct();
$(document).ready(function () {
  $(".btn-submit").click(function (e) {
    e.preventDefault();
    fetch("https://getuser.vercel.app/api/getAllProducts")
      .then((data) => data.json())
      .then((result) => {
        console.log(result[4].name);
      });
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
