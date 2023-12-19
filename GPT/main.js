function validateLogin() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Contoh: Validasi username dan password (gunakan yang lebih aman dalam implementasi yang sebenarnya)
    if (username === "user" && password === "pass") {
        alert("Login berhasil!");
    } else {
        alert("Login gagal. Coba lagi.");
    }
}
