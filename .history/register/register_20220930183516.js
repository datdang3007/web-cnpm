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
function testing(param) {
  const specialChar = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
  if (specialChar.test(param) || param.includes(" ")) {
    return true;
  }
  return false;
}

function handleDataUser(result) {
  let checkPass = false;
  let checkForm = true;
  let checkPassword = true;
  let checkEmail = true;
  let checkLengthName = true;
  let checkLengthPass = true;
  let checkSpecial = true;

  let dataUser = {
    email: "",
    name: "",
    password: "",
    carts: [],
  };
  dataUser.email = $(".register-input").val().trim();
  dataUser.name = $(".username-input").val().trim();
  dataUser.password = $(".confirm").val().trim();
  if (
    dataUser.email === "" ||
    dataUser.name === "" ||
    dataUser.password === "" ||
    document.querySelector("#regis-check").checked === false
  ) {
    alert("Input must be filled");
    checkForm = false;
  } else if (testing(dataUser.name) || testing(dataUser.password)) {
    alert("Username and password must not have spaces or special characters");
    checkSpecial = false;
  } else if (dataUser.name.length > 25) {
    alert("Name must be less than 25 characters");
    checkLengthName = false;
  } else if (dataUser.password.length > 30) {
    alert("Password must be less than 30 characters");
    checkLengthPass = false;
  } else if (dataUser.password !== $(".register-pass").val()) {
    alert("The Password is different from the Confirm !");
    checkForm = false;
  } else {
    const findNameUser = result.findIndex((val) => val.name === dataUser.name);
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

  if (
    checkForm === true &&
    checkPass === true &&
    checkPassword === true &&
    checkEmail === true &&
    checkLengthName === true &&
    checkLengthPass === true &&
    checkSpecial === true
  ) {
    return true;
  }
}
$(document).ready(function () {
  $(".btn-submit-register").click(function (e) {
    e.preventDefault();
    $("body").prepend(`
    <div class="form-loading">
    <ul>
        <li></li>
        <li></li>
        <li></li>
    </ul>
    </div>`);
    setTimeout(() => {
      $("body").find(".form-loading").remove();
    }, 1000);
    fetch("https://getuser.vercel.app/api/getAllUser")
      .then((data) => data.json())
      .then((result) => {
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
          checkLengthPass === true &&
          checkSpecial === true
        ) {
          let newUser = { ...dataUser };
          $.ajax({
            type: "POST",
            url: "https://getuser.vercel.app/api/register",
            data: JSON.stringify(newUser),
            contentType: "application/json",
            dataType: "json",
            success: function () {
              localStorage.setItem("loginUser", JSON.stringify(dataUser));
              window.location.replace("../login/login.html");
            },
            error: function () {
              alert("Something was wrong");
              $("body").find(".form-loading").remove();
            },
          });
        } else {
          checkForm = true;
          checkEmail = true;
          checkPassword = true;
          checkLengthName = true;
          checkLengthPass = true;
          checkSpecial = true;
        }
      })
      .catch((err) => {
        alert("Something was wrong", err);
        $("body").find(".form-loading").remove();
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
