function validateLogin() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    let userValue = "user";
    let passValue = "password";
    // Contoh: Validasi username dan password (gunakan yang lebih aman dalam implementasi yang sebenarnya)
    if (username === userValue; && password === passValue;) {
        berhasil();
    } else {
        alert("Login gagal. Coba lagi.");
    }
}

function berhasil() {
    open.window("https://alvin132qr/main/main.html")
}
