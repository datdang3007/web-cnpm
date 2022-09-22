const user = JSON.parse(localStorage.getItem("user"));
const getUser = `https://getuser.vercel.app/api/getAUser/${user}`;
fetch(getUser)
  .then((data) => data.json())
  .then((result) => {
    console.log(result);
  });

export default user;
