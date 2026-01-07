const API = "http://127.0.0.1:8000";

function signup(){
  fetch(API + "/signup", {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      password: document.getElementById("password").value,
      city: document.getElementById("city").value
    })
  })
  .then(res => res.json())
  .then(data => {
    alert("Signup success");
    window.location.href = "login.html";
  });
}

function login(){
  fetch(API + "/login", {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({
      email: document.getElementById("email").value,
      password: document.getElementById("password").value
    })
  })
  .then(res => res.json())
  .then(data => {
    localStorage.setItem("token", data.token);
    window.location.href = "dashboard.html";
  });
}
