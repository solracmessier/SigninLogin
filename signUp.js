function signUp() {
    var email = document.getElementById('signup-email').value;
    var password = document.getElementById('signup-password').value;

    // Save the email and password in local storage or server-side database
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);

    // Alert the user that sign-up was successful
    alert('Sign-up successful! You can now log in with your email and password.');

    // Optionally, redirect the user to the login page
    window.location.href = 'index.html';
}
