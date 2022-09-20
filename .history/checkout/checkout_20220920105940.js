$(".btn-checkout").click((e) => {
  e.preventDefault();
  window.location.replace("/checkout/checkout.html");
});

$("#btn-gohome").click((e) => {
  e.preventDefault();
  $("#btn-gohome").addClass("active");
  setTimeout(() => {
    window.location.replace("/homev1.html");
  }, 300);
});
