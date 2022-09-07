$(document).ready(function () {
  const leftContent = $(".active-nav-main").offset().left;
  $(".shop-down").offset({ left: leftContent });

  //-------sự kiện scroll---------
  $(window).scroll(function () {
    let top = $("html, body").scrollTop();
    console.log("top:", top);
  });
});
