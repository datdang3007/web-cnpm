$(document).ready(function () {
  const getUserID = localStorage.getItem("admin");
  localStorage.removeItem("admin");
  if (getUserID) {
    $("body").prepend(`
          <div class="form-loading">
          <ul>
          <li></li>
          <li></li>
          <li></li>
          </ul>
          </div>`);
    fetch(`https://getuser.vercel.app/api/getAAdmin/${getUserID}`)
      .then((data) => data.json())
      .then((result) => {
        $("body").find(".form-loading").remove();
        $(".input-email").val(result.email);
        $(".input-username").val(result.name);
        $(".handle-profile").css({
          opacity: 1,
          visibility: "visible",
        });
      })
      .catch((err) => {
        alert("Something was wrong", err);
        $("body").find(".form-loading").remove();
      });
  }
  $(".wrapper-form-password").click(function (e) {
    e.stopPropagation();
  });
  $(".profile").click(function (e) {
    e.stopPropagation();
  });
  $(".btn-change-password").click(function (e) {
    e.preventDefault();
    $(".backgr").css({
      opacity: 1,
      visibility: "visible",
    });
  });

  $(".backgr").click(function (e) {
    e.preventDefault();
    $(this).css({
      opacity: 0,
      visibility: "hidden",
    });
  });
  $(".wrapper-profile").click(function (e) {
    $(".handle-profile").css({
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
      const getEmail = $(".input-email").val().trim();
      const getUsername = $(".input-username").val().trim();
      const getUserPassword = $(".input-password").val().trim();
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
          if (getEmail === "" || getUsername === "" || getUserPassword === "") {
            $("body").find(".form-loading").remove();
            alert("Input can not be empty");
          } else if (testing(getUsername)) {
            $("body").find(".form-loading").remove();
            alert("Username must not have spaces or special characters");
          } else if (getUsername.length > 25) {
            $("body").find(".form-loading").remove();
            alert("Username must be less than 25 characters");
          } else {
            const checkNameUser = result.findIndex(
              (val) => val.name === getUsername && val._id !== getUserID
            );
            const checkEmailUser = result.findIndex(
              (val) => val.email === getEmail && val._id !== getUserID
            );
            const findPassword = result.findIndex(
              (val) => val._id === getUserID && val.password === getUserPassword
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
                email: getEmail,
                name: getUsername,
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
                error: function () {
                  alert("Update was wrong");
                  $("body").find(".form-loading").remove();
                },
              });
            }
          }
        })
        .catch((err) => {
          alert("Something was wrong", err);
          $("body").find(".form-loading").remove();
        });
    } else {
      alert("You don't have permissison to apply");
    }
  });
});

function testing(param) {
  const specialChar = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
  if (specialChar.test(param) || param.includes(" ")) {
    return true;
  }
  return false;
}
