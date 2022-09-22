const user = JSON.parse(localStorage.getItem("user"));
const getUser = `https://getuser.vercel.app/api/getAUser/${user}`;
fetch(getUser)
  .then((data) => data.json())
  .then((result) => {
    user = { ...result };
  });

export default user;
