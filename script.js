window.addEventListener("DOMContentLoaded", () => {
    const loginBtn = document.getElementById("login-btn");
  
    if (loginBtn) {
      loginBtn.addEventListener("click", (event) => {
        event.preventDefault();
  
        const email = document.getElementsByName("email")[0].value;
        const password = document.getElementsByName("password")[0].value;
  
        const storedEmail = localStorage.getItem("email");
        const storedPassword = localStorage.getItem("password");
  
        if (email === storedEmail && password === storedPassword) {

          window.location.href = "homepage.html";
        } else {
          alert("Invalid email or password. Please try again.");
        }
      });
    }
  });
  