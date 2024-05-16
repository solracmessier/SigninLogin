function login() {
    var email = document.getElementById('login-email').value;
    var password = document.getElementById('login-password').value;

    // Retrieve the email and password from local storage or server-side database
    var storedEmail = localStorage.getItem('email');
    var storedPassword = localStorage.getItem('password');

    if (email === storedEmail && password === storedPassword) {
        // Redirect to home page after successful login
        window.location.href = 'home.html';
    } else {
        // Display error message for invalid credentials
        alert('Invalid email or password. Please try again.');
    }
}



