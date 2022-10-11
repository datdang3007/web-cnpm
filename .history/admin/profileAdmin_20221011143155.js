$(document).ready(function () {
  const getUserID = localStorage.getItem("admin");
  localStorage.removeItem("admin
  ")
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
});
