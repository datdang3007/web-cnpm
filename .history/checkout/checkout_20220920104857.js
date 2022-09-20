$("#btn-gohome").click((e) => {
  e.preventDefault();
  $("#btn-gohome").addClass("active");
  setTimeout(() => {
    console.log("Delayed for 1 second.");
  }, 4000);
});
