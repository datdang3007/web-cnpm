$("#btn-checkout").click((e) => {
  e.preventDefault();
  alert("test");
  // window.location.replace("/checkout/checkout.html");
});

$("#btn-gohome").click((e) => {
  e.preventDefault();
  $("#btn-gohome").addClass("active");
  setTimeout(() => {
    window.location.replace("/homev1.html");
  }, 300);
});
