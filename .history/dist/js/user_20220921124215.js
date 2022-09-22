const user = JSON.parse(localStorage.getItem("user"));
localStorage.removeItem(user);
console.log("user:", user);

export default user;
