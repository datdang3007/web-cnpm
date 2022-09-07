$(document).ready(function () {
  const body = $("html, body");
  const getbody = $("body");

  //------- sự kiện scroll ---------

  const heightWin = $(window).height();
  //icon home
  const iconHome = $(".link-icon-home");
  //banner below
  const bannerBelow = document.querySelectorAll(".wrapper-fruit");
  const topBannerBelow = $(".wrapper-banner").offset().top;
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
        transform: "scale(0.7) translateY(-30px)",
      });
    } else {
      iconHome.css({
        transform: "scale(1) translateY(0)",
      });
    }
    //scrolling animation banner below
    if (top + heightWin >= topBannerBelow) {
      bannerBelow.forEach((val, index) => {
        val.classList.add(`action-banner-${index + 1}`);
        console.log("index", index);
      });
    }
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
  //----------- form login or rigister ---------

  const user = $(".user");
  const formLogin = `<div class="login similer">
                    <div class="form-login form-similer">
                        <input type="email" class="user-input" placeholder="Username or Email Address*">
                        <input type="password" class="pass-input" placeholder="Password*">
                    </div>
                    <div class="action-form">
                        <div class="checkbox-form remember">
                            <input type="checkbox" id="login-check">
                            <label for="login-check">Remember me</label>
                        </div>
                        <button class="forgot-pass">
                            Lost your password?
                        </button>
                    </div>
                    <button class="btn-submit btn-submit-login">LOGIN</button>
                    <div class="or-with">or Login Whith</div>
                </div>`;
  const formRegister = `<div class="register similer">
                    <div class="form-register form-similer">
                        <input type="email" class="user-input" placeholder="Your Email Address*">
                        <input type="password" class="pass-input" placeholder="Password*">
                        <div class="comfirm">
                          <input type="password" class="confirm" placeholder="Confirm*">
                          <button class="show-pass">
                            <i class="fa-regular fa-eye-slash"></i>
                          </button>
                    </div>
                    </div>
                    <div class="action-form">
                        <div class="checkbox-form agree">
                            <input type="checkbox" id="register-check">
                            <label for="register-check">I agree to the privacy policy</label>
                        </div>
                    </div>
                    <button class="btn-submit btn-submit-register">REGISTER</button>
                    <div class="or-with">or register Whith</div>
                </div>`;
  const userHtml = `
  <div class="form">
        <div class="backgr">
            <div class="wrapper-form">
                <div class="close-form"><i class="fa-sharp fa-solid fa-xmark"></i></div>
                <div class="taplist">
                    <button class="btn-login active-form">Login</button>
                    <p>or</p>
                    <button class="btn-register">Register</button>
                </div>
                <div class="login similer">
                    <div class="form-login form-similer">
                        <input type="email" class="user-input" placeholder="Username or Email Address*">
                        <input type="password" class="pass-input" placeholder="Password*">
                    </div>
                    <div class="action-form">
                        <div class="checkbox-form remember">
                            <input type="checkbox" id="login-check">
                            <label for="login-check">Remember me</label>
                        </div>
                        <button class="forgot-pass">
                            Lost your password?
                        </button>
                    </div>
                    <button class="btn-submit btn-submit-login">LOGIN</button>
                    <div class="or-with">or Login Whith</div>
                </div>
                <div class="info-choice">
                    <button class="google"><i class="fa-brands fa-google"></i></button>
                    <button class="facebook"><i class="fa-brands fa-facebook-f"></i></button>
                    <button class="twitter"><i class="fa-brands fa-twitter"></i></button>
                </div>
            </div>
        </div>
    </div>
  `;
  $(user).click(function (e) {
    e.preventDefault();
    //show form
    getbody.prepend(userHtml);
    const btnLogin = $(".btn-login");
    const btnRegister = $(".btn-register");
    const wrapFormjq = $(".wrapper-form");
    const tapList = document.querySelector(".taplist");
    const backgrForm = $(".backgr");
    const closeForm = $(".close-form");
    getbody.addClass("body-overflow");
    $(btnLogin).click(function (e) {
      e.preventDefault();
      btnRegister.removeClass("active-form");
      btnLogin.addClass("active-form");
      wrapFormjq.find(".similer").remove();
      tapList.insertAdjacentHTML("afterend", formLogin);
    });
    $(btnRegister).click(function (e) {
      e.preventDefault();
      btnRegister.addClass("active-form");
      btnLogin.removeClass("active-form");
      wrapFormjq.find(".similer").remove();
      tapList.insertAdjacentHTML("afterend", formRegister);
    });
    //hide form
    $(wrapFormjq).click(function (e) {
      e.stopPropagation();
    });
    $(backgrForm).click(function (e) {
      e.preventDefault();
      getbody.find(".form").remove();
      getbody.removeClass("body-overflow");
    });
    $(closeForm).click(function (e) {
      e.preventDefault();
      getbody.removeClass("body-overflow");
      getbody.find(".form").remove();
    });
  });
});
