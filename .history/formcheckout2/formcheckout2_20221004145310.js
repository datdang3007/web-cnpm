const cart = JSON.parse(localStorage.getItem("cart"));
console.log("cart:", cart);
const iduser = JSON.parse(localStorage.getItem("user-checkout"));
let totalCart = 0;
// get user
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

function testing(param) {
  const specialChar = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
  if (specialChar.test(param)) {
    return true;
  }
  return false;
}

$(document).ready(function () {
  $(".btn-submit").click(function (e) {
    e.preventDefault();
    if (iduser) {
      const username = $(".full-name").val().trim();
      console.log("username:", username);
      const coutry = $("#coutry-region option:selected").text();
      console.log("coutry:", coutry);
      const street = $(".street-address").val().trim();
      console.log("street:", street);
      const town = $(".town").val().trim();
      console.log("town:", town);
      const phone = $(".phone-number").val().trim();
      console.log("phone:", phone);
      const email = $(".user-email").val().trim();
      console.log("email:", email);

      const d = new Date();
      const datetime =
        d.getHours() +
        ":" +
        d.getMinutes() +
        " " +
        d.getDate() +
        "-" +
        (d.getMonth() + 1) +
        "-" +
        d.getFullYear();
      console.log("datetime:", datetime);

      if (testing(username)) {
        alert("Input must fill and have not special character");
      }
      //   $("body").prepend(`
      //       <div class="form-loading">
      //       <ul>
      //           <li></li>
      //           <li></li>
      //           <li></li>
      //       </ul>
      //       </div>`);
    } else {
      alert("You have to login");
    }
  });
});

function renderCartsUser(result) {
  $(".user-name").append(`${result.name}`).css({
    color: "#fff",
    "margin-top": "5px",
    "font-size": "14px",
  });

  $(".action-user").html(`
   <li><a class="logout" href="./register/register.html">Longout</a></li>
  `);
  $(".logout").click(function (e) {
    e.preventDefault();
    localStorage.removeItem("user");
    localStorage.removeItem("user-checkout");
    localStorage.removeItem("checkRemember");
    location.reload();
  });
}
