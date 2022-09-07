$(document).ready(function () {
  const leftContent = $(".active-nav-main").offset().left;
  $(".shop-down").offset({ left: leftContent });

  //-------sự kiện scroll---------
  const heightWin = $(window).height();
  //icon home
  const iconHome = $(".link-icon-home");
  //banner below
  const bannerBelow = document.querySelectorAll(".wrapper-fruit");
  const topBannerBelow = $(".wrapper-banner").offset().top;
  //btn scroll to top
  const btnScrollTop = $(".btn-to-top");
  actionScroll();
  $(window).scroll(function () {
    actionScroll();
  });
  function actionScroll() {
    let top = $("html, body").scrollTop();
    console.log("top:", top);
    //scroll icon home
    if (top > 10) {
      iconHome.css({
        transform: "scale(0.7) translateY(-30px)",
      });
    } else {
      iconHome.css({
        transform: "scale(1) translateY(0)",
      });
    }
    //scroll animation banner below
    if (top + heightWin >= topBannerBelow) {
      bannerBelow.forEach((val, index) => {
        val.classList.add(`action-banner-${index + 1}`);
        console.log("index", index);
      });
    }
    //btn scroll to top
    if (top >= 200) {
      btnScrollTop.removeClass("action-hide");
      btnScrollTop.addClass("action-show");
    } else {
      btnScrollTop.removeClass("action-show");
      btnScrollTop.addClass("action-hide");
    }
  }

  //-----------sự kiện click-------------
  $(btnScrollTop).click(function (e) {
    e.preventDefault();
    console.log("con cac");
  });
});
