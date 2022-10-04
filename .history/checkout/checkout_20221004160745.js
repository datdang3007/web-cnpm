const carts = JSON.parse(localStorage.getItem("cart"));
console.log("carts:", carts);

$("cart-items").html("");
if (carts) {
  carts.forEach((val) => {
    $("cart-items").append(`
                    <div class="items">
                        <span class="name-items">${val.name} <strong>x${val.quantity}</strong></span>
                        <span class="price-items">$${val.total}</span>
                    </div>
    `);
  });
}

$("#btn-gohome").click((e) => {
  e.preventDefault();
  $("#btn-gohome").addClass("active");
  // localStorage.removeItem("cart");
  setTimeout(() => {
    window.location.replace("/homev1.html");
  }, 300);
});
