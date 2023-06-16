function openAccount() {
    const firstName = localStorage.getItem("firstName");

    if (firstName) {
        document.getElementById("account").style.display = "block";
        document.getElementById("account-name").textContent = firstName;
    } else {
        console.log("First name not found in local storage.");
    }
}

openAccount();

function openCart() {
    alert("Cart clicked");
}

function logout() {
    const confirmLogout = confirm("Are you sure you want to logout?");

    if (confirmLogout) {
        window.location.href = "index.html";
    }
}
