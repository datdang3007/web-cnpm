$(document).ready(function () {
  const leftContent = $(".active-nav-main").offset().left;
  $(".shop-down").offset({ left: leftContent });

  //-------sự kiện scroll---------
  const iconHome = $(".link-icon-home");
  $(window).scroll(function () {
    let top = $("html, body").scrollTop();
    if (top > 10) {
      console.log("con cac");
      iconHome.animate("transform", "scale(0.7) translateY(-10px)");
    }
  });
});
