import dataProduct from "../dist/js/dataProduct.js";

let cart = [];

$(document).ready(function () {
  //--------click cart show -----------
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

  const productHTML = `
    <div class="product">
                        <div class="content">
                            <img src="https://res.cloudinary.com/sivadass/image/upload/v1493620046/dummy-products/cauliflower.jpg"
                                alt="">
                            <div class="action-cart">
                                <div class="name-product">Tomato - 1 Kg</div>
                                <div class="group-quantity-cart">
                                    <button class="minus"><i class="fa-solid fa-minus"></i></button>
                                    <input class="quantity-input-cart" type="number" value="1">
                                    <button class="plus"><i class="fa-solid fa-plus"></i></button>
                                    <div class="product-price">6.00$</div>
                                </div>
                            </div>
                        </div>
                        <div class="btn-del-product">
                            <i class="fa-solid fa-xmark"></i>
                        </div>
                    </div>
  
  `;

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
                          <div class="btn-del-product data-id="${val.id}"">
                              <i class="fa-solid fa-xmark"></i>
                          </div>
                      </div>
      `);
    });
  }
  //-------- click btn plus ---------
  const updateCart = (a) => {
    const changeCart = cart.findIndex((val) => val.id === $(a).data("id"));
    console.log("changeCart:", changeCart);
    cart[changeCart].quantity = +$(a).val();
  };

  function renderQuantity() {
    $(".quantity-input-cart").change(function (e) {
      e.preventDefault();
      let inputChange = +e.target.value;
      if (inputChange < 1 || inputChange > 1000) {
        $(this).val("1");
        alert("Input must be at least 1 and less than 1000");
      } else {
        updateCart(this);
      }
    });

    $(".plus").click(function (e) {
      e.preventDefault();
      console.log("test");
      const getInputQuantity = $(this).parent().find(".quantity-input-cart");
      const getQuantity = getInputQuantity.val();
      if (+getQuantity < 1000) {
        getInputQuantity.val(`${+getQuantity + 1}`);
      }
      updateCart($(this).parent().find(".quantity-input-cart"));
      console.log(cart);
    });

    // ----------- click btn minus -----------
    $(".minus").click(function (e) {
      e.preventDefault();
      console.log("test2");
      const getInputQuantity = $(this).parent().find(".quantity-input-cart");
      const getQuantity = getInputQuantity.val();
      if (+getQuantity > 1) {
        getInputQuantity.val(`${+getQuantity - 1}`);
      }
      updateCart($(this).parent().find(".quantity-input-cart"));
      console.log(cart);
    });
  }

  //-------- add to cart ----------
  $(document).ready(function () {
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
        renderCart();
        renderQuantity();
      } else if (cart.length === 0 || checkInCart < 0) {
        const getValueQuantity = $(".quantity-input-cart").val();
        console.log("getValueQuantity:", getValueQuantity);
        // cart[checkInCart].quantity;
      }
    });
  });
});
