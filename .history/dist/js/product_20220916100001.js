import productsDB from "../json/products.json" assert { type: "json" };
import dataProduct from "./dataProduct.js";
const modalWrapper = document.querySelector(".modal-wrapper");
let cart = [];

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
                                <button><span data-id="${todo.id}" id="btnAddToCart"><i class="fa-solid fa-cart-shopping"></i></span></button>
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
