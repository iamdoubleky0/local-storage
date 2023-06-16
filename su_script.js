const signUpBtn = document.getElementById("signup-btn");

if (signUpBtn) {
  signUpBtn.addEventListener("click", (event) => {
    event.preventDefault();

    const firstName = document.getElementsByName("first-name")[0].value;
    const lastName = document.getElementsByName("last-name")[0].value;
    const email = document.getElementsByName("email")[0].value;
    const password = document.getElementsByName("password")[0].value;
    const confirmPassword = document.getElementsByName("confirm-password")[0].value;

    if (firstName.trim() !== "" && lastName.trim() !== "" && email.trim() !== "" && password.trim() !== "" && confirmPassword.trim() !== "") {

      if (email.includes("@gmail.com")) {
        if (password === confirmPassword) {

          localStorage.setItem("firstName", firstName);
          localStorage.setItem("lastName", lastName);
          localStorage.setItem("email", email);
          localStorage.setItem("password", password);

          window.location.href = "homepage.html";

          alert("Account created successfully!");
        } else {
          alert("Passwords do not match.");
        }
      } else {
        alert("Please enter a valid email address.");
      }
    } else {
      alert("Please fill in all the fields.");
    }
  });
}
