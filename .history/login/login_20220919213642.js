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

$(document).ready(function () {
  const getUser = JSON.parse(localStorage.getItem("loginUser"));
  localStorage.removeItem("loginUser");
  console.log("getUser:", getUser);
  $(".login-input").val(getUser.email);
  $(".login-pass").val(getUser.password);
  $(".btn-submit-login").click(function (e) {
    e.preventDefault();
    console.log("con cac");
    localStorage.setItem("user", JSON.stringify(getUser));
    window.location.replace("../homev1.html");
  });
});
