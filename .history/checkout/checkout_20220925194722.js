$(".btn-checkout").click((e) => {
  e.preventDefault();
  window.location.href = "/checkout/checkout.html";
});

$("#btn-gohome").click((e) => {
  e.preventDefault();
  $("#btn-gohome").addClass("active");
  setTimeout(() => {
    window.location.replace("/homev1.html");
  }, 300);
});

let data = [];
const database = fetch("http://localhost:5000/api/getAllProducts")
  .then((data) => data.json())
  .then((result) => result);

console.log(database);
