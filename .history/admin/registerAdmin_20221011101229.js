$(document).ready(function () {
  let flag = true;
  $(".show-pass").click(function (e) {
    e.preventDefault();
    const inputShow = $(this).parent();
    if (flag) {
      inputShow.find("input").attr("type", "text");
      inputShow.find("button").html(`<i class="fa-regular fa-eye"></i>`);
      flag = !flag;
    } else if (!flag) {
      inputShow.find("input").attr("type", "password");
      inputShow.find("button").html(`<i class="fa-regular fa-eye-slash"></i>`);
      flag = !flag;
    }
  });
  $(".handle-register").click(function (e) {
    e.preventDefault();
    $(".handle-register").removeClass("show-register");
  });
  $(".wrapper-register").click(function (e) {
    e.preventDefault();
    e.stopPropagation();
  });
});
