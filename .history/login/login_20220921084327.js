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
  const inputUser = $(".login-input");
  const passwordUser = $(".login-pass");
  if (getUser) {
    inputUser.val(getUser.email);
    passwordUser.val(getUser.password);
  }
  $(".btn-submit-login").click(function (e) {
    e.preventDefault();
    fetch("https://getuser.vercel.app/api/getAllUser")
      .then((data) => data.json())
      .then((result) => {
        console.log(result);
        if (inputUser.val() === "" || passwordUser === "") {
          alert("Input can not be empty");
        } else {
          const getUser = result.filter((val) => {
            if (
              (val.name === inputUser || val.email === inputUser) &&
              val.password === passwordUser
            ) {
              return val;
            }
          });
          console.log(getUser);
        }
        // else {
        //   localStorage.setItem("user", JSON.stringify(getUser));
        //   window.location.replace("../homev1.html");
        // }
      });
  });
});
