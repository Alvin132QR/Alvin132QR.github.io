function validateLogin() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    var userValue = "user";
    var passValue = "password";
    // Contoh: Validasi username dan password (gunakan yang lebih aman dalam implementasi yang sebenarnya)
    if (username === userValue && password === passValue) {
       alert("Berhasil Login")
       window.open("https://alvin132qr/main/main.html")
    } else {
        alert("Login gagal. Coba lagi.");
    }
}

