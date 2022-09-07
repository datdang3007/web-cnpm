$(document).ready(function () {
  const leftContent = $(".active-nav-main").offset().left;
  $(".shop-down").offset({ left: leftContent });

  //-------sự kiện scroll---------
  const heightWin = $(window).height();
  console.log("heightWin:", heightWin);
  const iconHome = $(".link-icon-home");
  const bannerBelow1 = $(".action-banner-1");
  const bannerBelow2 = $(".action-banner-2");
  const bannerBelow3 = $(".action-banner-3");
  console.log("bannerBelow3:", bannerBelow3);
  $(window).scroll(function () {
    let top = $("html, body").scrollTop();
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
  });
});
