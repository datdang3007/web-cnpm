// $(".btn-checkout").click((e) => {
//   e.preventDefault();
// });

const test = document.getElementsByClassName("btn-checkout");
test.addEventListener("click", (e) => {
  e.preventDefault();
  alert("test");
});
