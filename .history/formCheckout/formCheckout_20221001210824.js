const userid = "63297b847c3f50dffd792b20";
function renderBills(Bills) {
  const billsUser = Bills.filter((val) => val.userid === userid);
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
                            <h3 class="name-user">Nguy???n ?????c H??ng</h3>
                            <div class="live phone-number">0123235345</div>
                            <div class="live stress">92 Tr???n L???u</div>
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

  //------- s??? ki???n scroll ---------

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

  //-----------s??? ki???n click-------------

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
