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
  let checkLengthName = true;
  let checkLengthPass = true;
  $(".btn-submit-register").click(function (e) {
    e.preventDefault();
    let getData = [];
    fetch("http://localhost:5000/api/getAllUser")
      .then((data) => data.json())
      .then((result) => {
        console.log("result:", result);
        let dataUser = {
          email: "",
          name: "",
          password: "",
          carts: [],
        };
        dataUser.email = $(".register-input").val();
        dataUser.name = $(".username-input").val();
        dataUser.password = $(".confirm").val();
        if (
          dataUser.email === "" ||
          dataUser.name === "" ||
          dataUser.password === "" ||
          document.querySelector("#regis-check").checked === false
        ) {
          alert("Input must be filled");
          checkForm = false;
        } else if (dataUser.name.length > 30) {
          alert("Name must be less than 30 characters");
          checkLengthName = false;
        } else if (dataUser.password.length > 50) {
          alert("Password must be less than 50 characters");
          checkLengthPass = false;
        } else if (dataUser.password !== $(".register-pass").val()) {
          alert("The Password is different from the Confirm !");
          checkForm = false;
        } else {
          const findNameUser = result.findIndex(
            (val) => val.name === dataUser.name
          );
          const findEmailUser = result.findIndex(
            (val) => val.email === dataUser.email
          );
          if (findEmailUser !== -1) {
            alert("Email already exists");
            checkEmail = false;
          }
          if (findNameUser !== -1 && checkEmail === true) {
            alert("Username already exists");
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
          checkEmail === true &&
          checkLengthName === true &&
          checkLengthPass === true
        ) {
          let newUser = { ...dataUser };
          console.log("newUser:", newUser);
          $.ajax({
            type: "POST",
            url: "http://localhost:5000/api/register",
            data: JSON.stringify(newUser),
            contentType: "application/json",
            dataType: "json",
            success: function () {
              localStorage.setItem("loginUser", JSON.stringify(dataUser));
              window.location.replace("../login/login.html");
            },
          });
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
