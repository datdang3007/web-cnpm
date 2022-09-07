$(document).ready(function () {
  const leftContent = $(".active-nav-main").offset().left;
  $(".shop-down").offset({ left: leftContent });

  //-------sự kiện scroll---------
  const heightWin = $(window).height();
  const iconHome = $(".link-icon-home");
  const bannerBelow1 = $(".action-banner-1");
  const bannerBelow2 = $(".action-banner-2");
  const bannerBelow3 = $(".action-banner-3");
  const heightBannerBelow = $(".wellcome").offset().top;
  console.log("heightBannerBelow:", heightBannerBelow);
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
