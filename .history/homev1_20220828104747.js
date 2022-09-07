$(document).ready(function () {
  const leftContent = $(".active-nav-main").offset().left;
  console.log("leftContent:", leftContent);
  $(".shop-down").offset({ left: leftContent });
});
