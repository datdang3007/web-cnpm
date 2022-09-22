const user = localStorage.getItem("user");
fetch(`https://getuser.vercel.app/api/${user}`)
  .then((data) => data.json())
  .then((result) => {
    console.log(result);
  });

export default user;
