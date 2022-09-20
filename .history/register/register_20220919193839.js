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
  let checkPass = false;
  let checkForm = true;
  $(".btn-submit-register").click(function (e) {
    e.preventDefault();
    let dataUser = {
      email: "",
      username: "",
      password: "",
    };
    dataUser.email = $(".register-input").val();
    dataUser.username = $(".username-input").val();
    dataUser.password = $(".confirm").val();
    if (
      dataUser.email === "" ||
      dataUser.username === "" ||
      dataUser.password === ""
    ) {
      alert("Input must be filled");
      checkForm = false;
    } else if (dataUser.password !== $(".register-pass").val()) {
      alert("The Password is different from the Confirm !");
      checkForm = false;
    }
    if (document.querySelector("#regis-check").checked === false) {
      $(".checkbox-form").find("i").remove();
      $(".checkbox-form").append(`<i class="fa-solid fa-exclamation"></i>`);
      alert("Input must be filled");
    }
  });
  $("#regis-check").click(function (e) {
    if (document.querySelector("#regis-check").checked === true) {
      $(".checkbox-form").find("i").remove();
      checkPass = true;
      console.log("checkPass:", checkPass);
    } else {
      checkPass = false;
      console.log("checkPass:", checkPass);
    }
  });
  if (checkForm === true && checkPass === true) {
    console.log("hello");
    $(".go-to-register").trigger("click");
  } else {
    checkForm = true;
  }
});
