$("#btn-gohome").click((e) => {
  e.preventDefault();
  $("#btn-gohome").addClass("active");
  // localStorage.removeItem("cart");
  setTimeout(() => {
    window.location.replace("/homev1.html");
  }, 300);
});
