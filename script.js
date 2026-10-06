// Registration validation

let registerForm = document.getElementById("registerForm");

if (registerForm) {

    registerForm.addEventListener("submit", function(event) {

        let password =
            document.getElementById("password").value;

        let confirmPassword =
            document.getElementById("confirmPassword").value;

        if (password.length < 6) {

            event.preventDefault();

            alert("Password must be at least 6 characters.");

            return;
        }

        if (password !== confirmPassword) {

            event.preventDefault();

            alert("Passwords do not match.");

            return;
        }

        alert("Registration form submitted successfully!");
    });
}


// Login validation

let loginForm = document.getElementById("loginForm");

if (loginForm) {

    loginForm.addEventListener("submit", function(event) {

        event.preventDefault();

        alert("Login form submitted successfully!");
    });
}