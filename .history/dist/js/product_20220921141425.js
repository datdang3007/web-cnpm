import productsDB from "../json/products.json" assert { type: "json" };
import dataProduct from "./dataProduct.js";
// import getCartUser from "./user.js";
const iduser = JSON.parse(localStorage.getItem("user"));
if (JSON.parse(localStorage.getItem("checkRemember")) === false) {
  localStorage.removeItem("user");
}
let cart = [];
if (iduser) {
  const getdataUser = `https://getuser.vercel.app/api/getAUser/${iduser}`;
  fetch(getdataUser)
    .then((data) => data.json())
    .then((result) => {
      console.log("result:", result.carts);
      if (result) {
        $(".user-name").append(`${result.name}`).css({
          color: "#666",
          "font-size": "14px",
        });
        if (result.carts) {
          cart = [...result.carts];
          renderCart();
          renderQuantity();
          delProductCart();
          $(".quantity").html(`${cart.length}`);
        }
        $(".get-login").html("Your profile").addClass("profile");
        $(".get-register").html("Logout").attr("href", "").addClass("logout");
        $(".logout").click(function (e) {
          e.preventDefault();
          localStorage.removeItem("user");
          location.reload();
          $(".get-login").removeClass("profile");
          $(".get-register").removeClass("logout");
        });
      }
    });
}
const modalWrapper = document.querySelector(".modal-wrapper");

$(".quantity").html(`${cart.length}`);
const cards = document.querySelector(".cards");
const menu1 = document.querySelector("#menu1");
const menu2 = document.querySelector("#menu2");
const menu3 = document.querySelector("#menu3");
const menu4 = document.querySelector("#menu4");
const menu5 = document.querySelector("#menu5");

menuAll.addEventListener("click", function (e) {
  removeAndSetClassActive(menuAll);
  renderCards(productsDB);
});
menu1.addEventListener("click", function (e) {
  removeAndSetClassActive(menu1);
  renderCards(productsDB, 1);
});
menu2.addEventListener("click", function (e) {
  removeAndSetClassActive(menu2);
  renderCards(productsDB, 2);
});
menu3.addEventListener("click", function (e) {
  removeAndSetClassActive(menu3);
  renderCards(productsDB, 3);
});
menu4.addEventListener("click", function (e) {
  removeAndSetClassActive(menu4);
  renderCards(productsDB, 4);
});
menu5.addEventListener("click", function (e) {
  removeAndSetClassActive(menu5);
  renderCards(productsDB, 5);
});

renderCards(productsDB);
cartEvent();

function removeAndSetClassActive(nameClassActive) {
  menuAll.classList.remove("active");
  menu1.classList.remove("active");
  menu2.classList.remove("active");
  menu3.classList.remove("active");
  menu4.classList.remove("active");
  menu5.classList.remove("active");
  nameClassActive.classList.add("active");
}

function renderCards(list, menu) {
  let listString = "";
  if (menu) {
    for (const todo of list) {
      if (todo.menu == menu) {
        listString += `
                    <div class="card" data-menu="${todo.menu}">
                        <div class="card-content">
                            <div class="img">
                                <img src=${todo.image} alt="">
                            </div>
                            <div class="details">
                                <div class="name-price">
                                    <span class="name">${todo.name}</span>
                                    <span class="price">${todo.price}$</span>
                                </div>
                                <button><span data-id="${todo.id}" class="btnAddToCart"><i class="fa-solid fa-cart-shopping"></i></span></button>
                            </div>
                        </div>
                    </div>
                `;
      }
    }
  } else {
    for (const todo of list) {
      listString += `
                <div class="card" data-menu="${todo.menu}">
                    <div class="card-content">
                        <div class="img">
                            <img src=${todo.image} alt="">
                        </div>
                        <div class="details">
                            <div class="name-price">
                                <span class="name">${todo.name}</span>
                                <span class="price">${todo.price}$</span>
                            </div>
                            <button class="btn-add"><span data-id="${todo.id}" class="btnAddToCart"><i class="fa-solid fa-cart-shopping"></i></span></button>
                        </div>
                    </div>
                </div>
            `;
    }
  }
  cards.innerHTML = listString;
  productEvent();
}

function productEvent() {
  const card = document.querySelectorAll(".card");
  card.forEach((element) => {
    const image = element.querySelector("img");

    image.addEventListener("click", function (e) {
      e.preventDefault();
      modalWrapper.classList.add("active");
      const quickView = document.querySelector(".quick-view");
      const idx = productsDB.findIndex((val) => val.image === image.src);
      quickView.innerHTML = `
                <div class="quickview-image">
                    <img src=${productsDB[idx].image} alt=${productsDB[idx].name}>
                </div>
                <div class="quickview-details">
                    <span class="product-name">${productsDB[idx].name}</span>
                    <span class="product-price">${productsDB[idx].price} $</span>
                </div>
            `;
      const modal = document.querySelector(".modal-wrapper");
      modal.addEventListener("click", function (e) {
        if (e.target === modal) {
          modalWrapper.classList.remove("active");
        }
      });
      const btnClose = document.querySelector(".close");
      btnClose.addEventListener("click", function (event) {
        event.preventDefault();
        modalWrapper.classList.remove("active");
      });
    });
  });

  // click add to cart

  $(".btnAddToCart").click(function (e) {
    e.preventDefault();
    const idClick = $(this).data("id");
    const getValue = dataProduct.filter((val) => val.id === idClick);
    const checkInCart = cart.findIndex((val) => val.id === idClick);
    if (cart.length === 0 || checkInCart < 0) {
      cart.push({
        img: getValue[0].image,
        name: getValue[0].name,
        price: getValue[0].price,
        id: getValue[0].id,
        quantity: 1,
        total: getValue[0].price,
      });
      $(".quantity").html(`${cart.length}`);
      $(".go-checkout").remove("active-unselected");
    } else if (cart.length !== 0 || checkInCart >= 0) {
      const getValueQuantity = cart.findIndex(
        (val) => val.id === $(this).data("id")
      );
      cart[getValueQuantity].quantity += 1;
      cart[getValueQuantity].total += cart[getValueQuantity].price;
    }
    renderCart();
    renderQuantity();
    delProductCart();
  });
}

function cartEvent() {
  $(".cart-icon").click(function (e) {
    e.preventDefault();
    $(".wrapper-drop-dwon-cart").css({
      transform: "translateX(0)",
      transition: "0.3s",
    });
    $(".drop-down-cart").css(
      {
        opacity: "1",
        visibility: "visible",
        transition: "0.3s",
      },
      300
    );
    if (cart.length == 0) {
      $(".products-cart").find(".active-empty").remove();
      $(".products-cart").append(`
        <div class="active-empty">
          <img class="img-empty" src="/icon/empty-cart.png" alt="">
          <h3 class="title-empty">Your cart is empty</h3>
        </div>
      `);
      $(".go-checkout").addClass("active-unselected");
    } else {
      $(".go-checkout").removeClass("active-unselected");
      let totalCart = cart.reduce((acc, val) => {
        return acc + val.total;
      }, 0);
      $(".total-cart").html(`$${totalCart}`);
    }
  });

  $(".wrapper-drop-dwon-cart").click(function (e) {
    e.preventDefault();
    e.stopPropagation();
  });

  // ---------- close cart ---------------
  $(".drop-down-cart").click(function (e) {
    e.preventDefault();
    closeCart();
  });
  $(".btn-close-cart").click(function (e) {
    e.preventDefault();
    closeCart();
  });
}

function closeCart() {
  $(".wrapper-drop-dwon-cart").css({
    transform: "translateX(100%)",
    transition: "0.3s",
  });
  $(".drop-down-cart").css(
    {
      opacity: "0",
      visibility: "hidden",
      transition: "0.3s",
    },
    300
  );
}

// check input quantity cart

// ---------- render cart -----------
function renderCart() {
  $(".products-cart").html("");
  cart.forEach((val) => {
    $(".products-cart").append(`
                      <div class="product">
                          <div class="content">
                              <img src="${val.img}"
                                  alt="">
                              <div class="action-cart">
                                  <div class="name-product">${val.name}</div>
                                  <div class="group-quantity-cart">
                                      <button data-id="${val.id}" class="minus"><i class="fa-solid fa-minus"></i></button>
                                      <input class="quantity-input-cart" type="number" data-id="${val.id}" value="${val.quantity}">
                                      <button data-id="${val.id}" class="plus"><i class="fa-solid fa-plus"></i></button>
                                      <div class="product-price">$${val.price}</div>
                                  </div>
                              </div>
                          </div>
                          <div class="btn-del-product" data-id="${val.id}">
                              <i class="fa-solid fa-xmark"></i>
                          </div>
                      </div>
      `);
  });
}
//-------- click btn plus ---------
const updateCart = (a) => {
  const changeCart = cart.findIndex((val) => val.id === $(a).data("id"));
  cart[changeCart].quantity = +$(a).val();
  cart[changeCart].total = cart[changeCart].price * cart[changeCart].quantity;
  let totalCart = cart.reduce((acc, val) => {
    return acc + val.total;
  }, 0);
  $(".total-cart").html(`$${totalCart}`);
};

function renderQuantity() {
  $(".quantity-input-cart").change(function (e) {
    e.preventDefault();
    let inputChange = +e.target.value;
    if (inputChange < 1 || inputChange > 1000) {
      const getOldQuantity = cart.findIndex(
        (val) => val.id == $(this).data("id")
      );
      console.log($(this).data("id"));
      console.log("getOldQuantity: ", getOldQuantity);
      $(this).val(cart[getOldQuantity].quantity);
      alert("Input must be at least 1 and less than 1000");
    } else {
      updateCart(this);
    }
  });

  //----- click plus quantity ---------------

  $(".plus").click(function (e) {
    e.preventDefault();
    const getInputQuantity = $(this).parent().find(".quantity-input-cart");
    const getQuantity = getInputQuantity.val();
    if (+getQuantity < 1000) {
      getInputQuantity.val(`${+getQuantity + 1}`);
    }
    updateCart($(this).parent().find(".quantity-input-cart"));
  });

  // ----------- click btn minus -----------
  $(".minus").click(function (e) {
    e.preventDefault();
    const getInputQuantity = $(this).parent().find(".quantity-input-cart");
    const getQuantity = getInputQuantity.val();
    if (+getQuantity > 1) {
      getInputQuantity.val(`${+getQuantity - 1}`);
    }
    updateCart($(this).parent().find(".quantity-input-cart"));
  });
}

// ---------- delete product cart ---------
function delProductCart() {
  $(".btn-del-product").click(function (e) {
    e.preventDefault();
    const findDel = cart.findIndex((val) => val.id === $(this).data("id"));
    cart.splice(findDel, 1);
    $(".quantity").html(`${cart.length}`);
    renderCart();
    renderQuantity();
    delProductCart();
    $(".quantity").html(`${cart.length}`);
    if (cart.length == 0) {
      $(".products-cart").append(`
      <div class="active-empty">
      <img class="img-empty" src="/icon/empty-cart.png" alt="">
      <h3 class="title-empty">Your cart is empty</h3>
      </div>
      `);
      $(".go-checkout").addClass("active-unselected");
      $(".total-cart").html(`$0.00`);
    } else {
      let totalCart = cart.reduce((acc, val) => {
        return acc + val.total;
      }, 0);
      $(".total-cart").html(`$${totalCart}`);
    }
  });
}
$(window).on("beforeunload", function () {
  const updateUser = {
    carts: cart,
  };
  $.ajax({
    type: "PUT",
    url: "http://localhost:5000/api/updateUser/63252dacfc388639cf55ee42",
    data: JSON.stringify(updateUser),
    contentType: "application/json",
    dataType: "json",
    success: function (response) {
      alert(
        "Data: " +
          JSON.stringify(updateUser) +
          "\nStatus: " +
          JSON.stringify(response)
      );
    },
  });
});
