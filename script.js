document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault(); // prevent form from refreshing

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  alert(`Login attempt!\nUsername: ${username}\nPassword: ${password}`);
  console.log("Username:", username);
  console.log("Password:", password);
});
