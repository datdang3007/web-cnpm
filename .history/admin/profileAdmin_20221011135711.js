$(document).ready(function () {
  //   $("body").prepend(`
  //       <div class="form-loading">
  //       <ul>
  //       <li></li>
  //       <li></li>
  //       <li></li>
  //       </ul>
  //     </div>`);
  //   fetch(`https://getuser.vercel.app/api/getAAdmin/${getUserID}`)
  //     .then((data) => data.json())
  //     .then((result) => {
  //       $("body").find(".form-loading").remove();
  //       $(".input-email").val(result.email);
  //       $(".input-username").val(result.name);
  //     });
  $(".wrapper-form-password").click(function (e) {
    e.stopPropagation();
  });
  $(".wrapper-profile").click(function (e) {
    e.stopPropagation();
    console.log("con cac");
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
  $(".handle-profile").click(function (e) {
    console.log("con caca");
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
});
