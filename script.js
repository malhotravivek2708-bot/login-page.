document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault(); // prevent form refresh

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // Log values to browser console (F12 > Console tab)
  console.log("Login attempt:");
  console.log("Username:", username);
  console.log("Password:", password);
});
