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

const getdatabase = (callback) => {
  fetch("http://localhost:5000/api/getAllProducts")
    .then((data) => data.json())
    .then(callback);
};

function start(data) {
  getdatabase(function (products) {
    data = [...products];
  });
}
let data = [];
start(data);
console.log(data);