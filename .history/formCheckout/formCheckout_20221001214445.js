const userid = "63297b847c3f50dffd792b20";
function renderCartsBill(carts, index) {
  console.log("index:", index);
  carts.forEach((vals) => {
    $(`.products-id-bills-0`).append(`
                            <div class="products">
                                <img src=${vals.image}
                                    alt="">
                                <div class="product-content">
                                    <div class="name-product">${vals.name}</div>
                                    <div class="product-type">
                                        <div class="quantity">${vals.quantity}</div>
                                        <div class="category">${vals.category}</div>
                                    </div>
                                    <div class="price">$${vals.price}</div>

                                </div>
                            </div>     
    `);
  });
}
function renderBills(Bills) {
  const billsUser = Bills.filter((val) => val.userid === userid);
  if (billsUser) {
    billsUser.forEach((val, index) => {
      $(".wrapper-checkout").append(`
              <div class="checkout-content">
                    <div class="datetime-order">${val.datetime}</div>
                    <div class="checkout-info">
                        <div class="products-and-adress products-id-bills-${index}">
                          ${renderCartsBill(val.carts, index)}
                        </div>
                        <div class="address">
                            <div class="delivery-address">
                                <h2>Delivery Adress</h2>
                            </div>
                            <h3 class="name-user">${val.name}</h3>
                            <div class="live phone-number">${val.phone}</div>
                            <div class="live stress">${val.adress}</div>
                            <div class="live coutry-city">${val.coutry} ${
        val.city
      }</div>
                            <h2 class="subtotal">
                                Subtotal: $${val.total}
                            </h2>
                        </div>
                    </div>
                </div>        
      `);
    });
  }
}

const renderBill = `
                  <div class="checkout-content">
                    <div class="datetime-order">10:00 1-10-2022</div>
                    <div class="checkout-info">
                        <div class="products-and-adress">
                            <div class="products">
                                <img src="https://res.cloudinary.com/sivadass/image/upload/v1493620046/dummy-products/cucumber.jpg"
                                    alt="">
                                <div class="product-content">
                                    <div class="name-product">Cucmunber</div>
                                    <div class="product-total">
                                        <div class="quantity">x3</div>
                                        <div class="price">$40</div>
                                    </div>

                                </div>
                            </div>
                            <div class="products">
                                <img src="https://res.cloudinary.com/sivadass/image/upload/v1493620046/dummy-products/cucumber.jpg"
                                    alt="">
                                <div class="product-content">
                                    <div class="name-product">Cucmunber</div>
                                    <div class="product-type">
                                        <div class="quantity">x3</div>
                                        <div class="category">vegetables</div>
                                    </div>
                                    <div class="price">$40</div>

                                </div>
                            </div>
                            <div class="products">
                                <img src="https://res.cloudinary.com/sivadass/image/upload/v1493620046/dummy-products/cucumber.jpg"
                                    alt="">
                                <div class="product-content">
                                    <div class="name-product">Cucmunber</div>
                                    <div class="product-type">
                                        <div class="quantity">x3</div>
                                        <div class="category">vegetables</div>
                                    </div>
                                    <div class="price">$40</div>

                                </div>
                            </div>
                            <div class="products">
                                <img src="https://res.cloudinary.com/sivadass/image/upload/v1493620046/dummy-products/cucumber.jpg"
                                    alt="">
                                <div class="product-content">
                                    <div class="name-product">Cucmunber</div>
                                    <div class="product-type">
                                        <div class="quantity">x3</div>
                                        <div class="category">vegetables</div>
                                    </div>
                                    <div class="price">$40</div>

                                </div>
                            </div>
                            <div class="products">
                                <img src="https://res.cloudinary.com/sivadass/image/upload/v1493620046/dummy-products/cucumber.jpg"
                                    alt="">
                                <div class="product-content">
                                    <div class="name-product">Cucmunber</div>
                                    <div class="product-type">
                                        <div class="quantity">x3</div>
                                        <div class="category">vegetables</div>
                                    </div>
                                    <div class="price">$40</div>

                                </div>
                            </div>
                        </div>
                        <div class="address">
                            <div class="delivery-address">
                                <h2>Delivery Adress</h2>
                            </div>
                            <h3 class="name-user">Nguyễn Đức Hùng</h3>
                            <div class="live phone-number">0123235345</div>
                            <div class="live stress">92 Trần Lựu</div>
                            <div class="live coutry-city">Viet Nam TPHCM</div>
                            <h2 class="subtotal">
                                Subtotal: $350
                            </h2>
                        </div>
                    </div>
                </div>
`;

$(document).ready(function () {
  fetch("https://getuser.vercel.app/api/getAllBills")
    .then((data) => data.json())
    .then((result) => {
      console.log("result:", result);
      renderBills(result);
    })
    .catch((err) => {
      alert(`Something was wrong ${err}`);
    });

  const body = $("html, body");
  const getbody = $("body");

  //------- sự kiện scroll ---------

  const heightWin = $(window).height();
  //icon home
  const iconHome = $(".header-middle");
  //banner below
  const bannerBelow = document.querySelectorAll(".wrapper-fruit");
  //btn scroll to top
  const btnScrollTop = $(".btn-to-top");
  actionScroll();
  // catch eventing scroll window
  $(window).scroll(function () {
    actionScroll();
  });
  function actionScroll() {
    let top = $("html, body").scrollTop();
    //scrolling animation icon home
    if (top > 10) {
      iconHome.css({
        transform: "scale(0.7) translate(-72%, -45px)",
      });
    } else {
      iconHome.css({
        transform: "scale(1) translate(-50% ,10px)",
      });
    }
    //scrolling animation banner below

    //btn scrolling to top
    if (top >= 200) {
      btnScrollTop.addClass("action-show");
    } else {
      btnScrollTop.removeClass("action-show");
    }
  }

  //-----------sự kiện click-------------

  //----------- click to scroll to top ------------
  $(btnScrollTop).click(function (e) {
    e.preventDefault();
    body.animate(
      {
        scrollTop: 0,
      },
      500
    );
  });
});
