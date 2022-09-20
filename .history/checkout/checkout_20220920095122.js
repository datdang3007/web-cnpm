// $(".btn-checkout").click((e) => {
//   e.preventDefault();
// });

const test = document.getElementsByClassName("btn-checkout");
console.log(test);
test.addEventListener("click", (e) => {
  e.preventDefault();
  alert("test");
});
