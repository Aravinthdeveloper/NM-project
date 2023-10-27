document.addEventListener('DOMContentLoaded', function () {
    const signupForm = document.getElementById('signup-form');
    const loginForm = document.getElementById('login-form');
    const message = document.getElementById('message');

    signupForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const username = document.getElementById('signup-username').value;
        const password = document.getElementById('signup-password').value;

        // Here, you can add code to send the signup data to your server or local storage.
        // For this basic example, we'll just display a message.
        message.textContent = `Signup successful for ${username}`;
    });

    loginForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const username = document.getElementById('login-username').value;
        const password = document.getElementById('login-password').value;

        // Here, you can add code to check the login data with your server or local storage.
        // For this basic example, we'll just display a message.
        message.textContent = `Logged in as ${username}`;
    });
});