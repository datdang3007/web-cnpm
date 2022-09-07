$(document).ready(function () {
  const leftContent = $(".nav-main .active").offset().left;
  console.log("leftContent:", leftContent);
  $(".shop-down").offset({ left: leftContent });
});
