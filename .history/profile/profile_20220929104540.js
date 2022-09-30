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
const getUserID = JSON.parse(localStorage.getItem("user"));
if (getUserID) {
  $("body").prepend(`
      <div class="form-loading">
      <ul>
      <li></li>
      <li></li>
      <li></li>
      </ul>
    </div>`);
  fetch(`https://getuser.vercel.app/api/getAUser/${getUserID}`)
    .then((data) => data.json())
    .then((result) => {
      $("body").find(".form-loading").remove();
      $(".input-email").val(result.email);
      $(".input-username").val(result.name);
      $(".input-password").val(result.password);
    });
}
$(document).ready(function () {
  //show form password
  $(".btn-change-password").click(function (e) {
    e.preventDefault();
    $(".backgr").css({
      opacity: 1,
      visibility: "visible",
    });
  });
  $(".wrapper-form-password").click(function (e) {
    e.stopPropagation();
  });

  // close form password
  $(".backgr").click(function (e) {
    e.preventDefault();
    $(this).css({
      opacity: 0,
      visibility: "hidden",
    });
  });
  $(".btn-close").click(function (e) {
    e.preventDefault();
    $(".backgr").css({
      opacity: 0,
      visibility: "hidden",
    });
  });

  $(".btn-apply").click(function (e) {
    e.preventDefault();
    if (getUserID) {
      const getEmail = $(".input-email");
      const getUsername = $(".input-username");
      $("body").prepend(`
      <div class="form-loading">
      <ul>
      <li></li>
      <li></li>
      <li></li>
      </ul>
    </div>`);
      fetch("https://getuser.vercel.app/api/getAllUser")
        .then((data) => data.json())
        .then((result) => {
          console.log("result:", result);
          $("body").find(".form-loading").remove();
          if (getEmail.val() === "" || getUsername.val() === "") {
            alert("Input can not be empty");
          } else {
            const findNameUser = result.findIndex(
              (val) => val.name === getUsername.val() && val._id !== getUserID
            );
            const findEmailUser = result.findIndex(
              (val) => val.email === getEmail.val() && val._id !== getUserID
            );
            if (findEmailUser !== -1) {
              alert("Email already exists");
            } else if (findNameUser !== -1) {
              alert("Username already exists");
            }
          }
        });
    } else {
      alert("You don't have permissison to apply");
    }
  });
});
