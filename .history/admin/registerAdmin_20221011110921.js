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

//check admin

function testing(param) {
  const specialChar = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
  if (specialChar.test(param) || param.includes(" ")) {
    return true;
  }
  return false;
}

$(document).ready(function () {
  let checkPass = false;
  let checkForm = true;
  let checkPassword = true;
  let checkEmail = true;
  let checkLengthName = true;
  let checkLengthPass = true;
  let checkSpecial = true;
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
    fetch("https://getuser.vercel.app/api/getAllAdmin")
      .then((data) => data.json())
      .then((result) => {
        console.log("result:", result);
        let dataUser = {
          email: "",
          name: "",
          password: "",
          permission: false,
        };
        dataUser.email = $(".register-input").val().trim();
        dataUser.name = $(".username-input").val().trim();
        dataUser.password = $(".confirm").val().trim();
        if (
          dataUser.email === "" ||
          dataUser.name === "" ||
          dataUser.password === ""
        ) {
          $("body").find(".form-loading").remove();

          alert("Input must be filled");
          checkForm = false;
        } else if (testing(dataUser.name) || testing(dataUser.password)) {
          $("body").find(".form-loading").remove();
          alert(
            "Username and password must not have spaces or special characters"
          );
          checkSpecial = false;
        } else if (dataUser.name.length > 25) {
          $("body").find(".form-loading").remove();
          alert("Name must be less than 25 characters");
          checkLengthName = false;
        } else if (dataUser.password.length > 30) {
          $("body").find(".form-loading").remove();
          alert("Password must be less than 30 characters");
          checkLengthPass = false;
        } else if (dataUser.password !== $(".register-pass").val()) {
          $("body").find(".form-loading").remove();
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
            $("body").find(".form-loading").remove();
            alert("Email already exists");
            checkEmail = false;
          }
          if (findNameUser !== -1 && checkEmail === true) {
            $("body").find(".form-loading").remove();
            alert("Admin already exists");
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
          console.log("hello");
          let newUser = { ...dataUser };
          console.log("newUser:", newUser);
          $.ajax({
            type: "POST",
            url: "https://getuser.vercel.app/api/AdminRegister",
            data: JSON.stringify(newUser),
            contentType: "application/json",
            dataType: "json",
            success: function () {
              $("body").find(".form-loading").remove();
              alert("Register successed!");
            },
            error: function () {
              alert("Something was wrong");
              $("body").find(".form-loading").remove();
            },
          });
        } else {
          console.log("checkForm:", checkForm);
          checkForm = true;
          console.log("checkEmail:", checkEmail);
          checkEmail = true;
          console.log("checkPassword:", checkPassword);
          checkPassword = true;
          console.log("checkLengthName:", checkLengthName);
          checkLengthName = true;
          console.log("checkLengthPass:", checkLengthPass);
          checkLengthPass = true;
          console.log("checkSpecial:", checkSpecial);
          checkSpecial = true;
        }
      })
      .catch((err) => {
        alert("Something was wrong", err);
        $("body").find(".form-loading").remove();
      });
  });
});
