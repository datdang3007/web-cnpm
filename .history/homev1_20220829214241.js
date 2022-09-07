function actionScroll(top) {
  let top = $("html, body").scrollTop();
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
}

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
  actionScroll(top);
  $(window).scroll(function () {
    //scroll icon home
    actionScroll(top);
  });
});
