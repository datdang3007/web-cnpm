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
  let checkPassword = true;
  let checkEmail = true;
  $(".btn-submit-register").click(function (e) {
    e.preventDefault();
    let getData = [];
    fetch("http://localhost:5000/api/getAllUser")
      .then((data) => data.json())
      .then((result) => {
        console.log("result:", result);
        let dataUser = {
          email: "",
          username: "",
          password: "",
          carts: [],
        };
        dataUser.email = $(".register-input").val();
        dataUser.username = $(".username-input").val();
        dataUser.password = $(".confirm").val();
        if (
          dataUser.email === "" ||
          dataUser.username === "" ||
          dataUser.password === "" ||
          document.querySelector("#regis-check").checked === false
        ) {
          alert("Input must be filled");
          checkForm = false;
        } else if (dataUser.password !== $(".register-pass").val()) {
          alert("The Password is different from the Confirm !");
          checkForm = false;
        } else {
          const findNameUser = result.findIndex(
            (val) => val.name === dataUser.username
          );
          const findEmailUser = result.findIndex(
            (val) => val.email === dataUser.email
          );
          if (findEmailUser !== -1) {
            alert("Email already exists");
            checkEmail = false;
          }
          if (findNameUser !== -1 && checkEmail === true) {
            alert("Name already exists");
            checkPassword = false;
          }
        }

        if (document.querySelector("#regis-check").checked === false) {
          $(".checkbox-form").find("i").remove();
          $(".checkbox-form").append(`<i class="fa-solid fa-exclamation"></i>`);
        }
        if (
          checkForm === true &&
          checkPass === true &&
          checkPassword === true &&
          checkEmail === true
        ) {
          let newUser = [...dataUser];
          console.log("newUser:", newUser);
          // localStorage.setItem("loginUser", JSON.stringify(dataUser));
          // window.location.replace("../login/login.html");
        } else {
          checkForm = true;
          checkEmail = true;
          checkPassword = true;
        }
      });
  });
  $("#regis-check").click(function (e) {
    if (document.querySelector("#regis-check").checked === true) {
      $(".checkbox-form").find("i").remove();
      checkPass = true;
    } else {
      checkPass = false;
    }
  });
});
