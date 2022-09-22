const user = JSON.parse(localStorage.getItem("user"));
const getUser = `https://getuser.vercel.app/api/getAUser/${user}`;
let exportUser = {};
fetch(getUser)
  .then((data) => data.json())
  .then((result) => {
    exportUser = { ...result };
  });

export default exportUser;
