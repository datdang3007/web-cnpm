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

const getUserID = localStorage.getItem("userid");
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
    });
}
localStorage.removeItem("userid");

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
      const getUserPassword = $(".input-password");
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
          if (
            getEmail.val() === "" ||
            getUsername.val() === "" ||
            getUserPassword.val() === ""
          ) {
            $("body").find(".form-loading").remove();
            alert("Input can not be empty");
          } else {
            const checkNameUser = result.findIndex(
              (val) => val.name === getUsername.val() && val._id !== getUserID
            );
            const checkEmailUser = result.findIndex(
              (val) => val.email === getEmail.val() && val._id !== getUserID
            );
            const findPassword = result.findIndex(
              (val) =>
                val._id === getUserID && val.password === getUserPassword.val()
            );
            if (findPassword === -1) {
              $("body").find(".form-loading").remove();
              alert("Incorrect password!");
            } else if (checkEmailUser !== -1) {
              $("body").find(".form-loading").remove();
              alert("Email already exists");
            } else if (checkNameUser !== -1) {
              $("body").find(".form-loading").remove();
              alert("Username already exists");
            } else if (
              findPassword !== -1 &&
              checkEmailUser === -1 &&
              checkNameUser === -1
            ) {
              const updateUser = {
                email: getEmail.val(),
                name: getUsername.val(),
              };
              $("body").prepend(`
                <div class="form-loading">
                  <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                  </ul>
                </div>`);
              $.ajax({
                type: "PUT",
                url: `https://getuser.vercel.app/api/updateUser/${getUserID}`,
                data: JSON.stringify(updateUser),
                contentType: "application/json",
                dataType: "json",
                success: function () {
                  alert("changed success");
                  $("body").find(".form-loading").remove();
                },
              });
            }
          }
        });
    } else {
      alert("You don't have permissison to apply");
    }
  });

  $(".btn-changed-password").click(function (e) {
    e.preventDefault();
    if (getUserID) {
      const oldPassword = $(".old-pass");
      console.log("oldPassword:", oldPassword);
      const newPassword = $(".new-pass");
      console.log("newPassword:", newPassword);
      const comfirmPassword = $(".comfirm-pass");
      console.log("comfirmPassword:", comfirmPassword);
    } else {
      alert("You don't have permissison to apply");
    }
  });
});
