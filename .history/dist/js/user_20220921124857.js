const user = localStorage.getItem("user");
console.log("user:", user);
const getUser = `https://getuser.vercel.app/api/getAUser/${user}`;
fetch(getUser)
  .then((data) => data.json())
  .then((result) => {
    console.log(result);
  });

export default user;
