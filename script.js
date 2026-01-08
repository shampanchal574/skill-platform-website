// 🔗 BACKEND URL (RENDER)
const API_URL = "https://skill-platform-backend.onrender.com";

let isLogin = false;

// Toggle between Signup & Login
function toggleMode() {
  isLogin = !isLogin;

  document.getElementById("title").innerText = isLogin ? "Login" : "Signup";
  document.querySelector("button").innerText = isLogin ? "Login" : "Signup";
  document.querySelector(".switch").innerText =
    isLogin ? "Don't have an account? Signup" : "Already have an account? Login";

  document.getElementById("name").style.display = isLogin ? "none" : "block";
  document.getElementById("result").innerText = "";
}

// Signup function
async function signup() {
  if (isLogin) {
    login();
    return;
  }

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const res = await fetch(`${API_URL}/signup`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, email, password })
  });

  const data = await res.json();
  document.getElementById("result").innerText = JSON.stringify(data);
}

// Login function
async function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const res = await fetch(`${API_URL}/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password })
  });

  const data = await res.json();
  document.getElementById("result").innerText = JSON.stringify(data);
}
