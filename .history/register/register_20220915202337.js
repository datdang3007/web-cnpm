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

let dataUser = {
  email: "",
  username: "",
  password: "",
};

$(document).ready(function () {
  $(".btn-submit-register").click(function (e) {
    e.preventDefault();
    dataUser.email = $(".register-input").val();
    dataUser.username = $(".username-input").val();
    dataUser.password = $(".confirm").val();
    if (
      dataUser.email === "" ||
      dataUser.username === "" ||
      dataUser.password === ""
    ) {
      alert("Input must be filled");
    } else if (dataUser.password !== $(".register-pass").val()) {
      alert("The Password is different from the Confirm !");
    }
    console.log($(".register-check").val();
    if ($(".register-check").checked() === false) {
      alert("check is uncheck");
    }
  });
});
