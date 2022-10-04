const cart = JSON.parse(localStorage.getItem("cart"));
const iduser = JSON.parse(localStorage.getItem("user-checkout"));
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
      console.log("result:", result);
      renderCartsUser(result);
      $("body").find(".form-loading").remove();
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
    // $("body").prepend(`
    //   <div class="form-loading">
    //   <ul>
    //       <li></li>
    //       <li></li>
    //       <li></li>
    //   </ul>
    //   </div>`);
    // fetch("https://getuser.vercel.app/api/getAllProducts")
    //   .then((data) => data.json())
    //   .then((result) => {
    //     $("body").find(".form-loading").remove();
    //   });
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

function renderCartsUser(result) {
  $(".user-name").append(`${result.name}`).css({
    color: "#fff",
    "margin-top": "5px",
    "font-size": "14px",
  });

  $(".action-user").html(`
   <li><a class="logout" href="./register/register.html">Longout</a></li>
  `);
  $(".get-purchase-order").click(function (e) {
    e.preventDefault();
    localStorage.setItem("userBills", JSON.stringify(iduser));
    window.location.replace("../formCheckout/formCheckout.html");
  });
  $(".logout").click(function (e) {
    e.preventDefault();
    localStorage.removeItem("user");
    localStorage.removeItem("user-checkout");
    localStorage.removeItem("checkRemember");
    location.reload();
  });
}
