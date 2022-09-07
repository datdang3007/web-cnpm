$(document).ready(function () {
  const leftContent = $(".active-nav-main").offset().left;
  $(".shop-down").offset({ left: leftContent });

  //-------sự kiện scroll---------
  let top = $("html, body").scrollTop();
  console.log("top:", top);
});
