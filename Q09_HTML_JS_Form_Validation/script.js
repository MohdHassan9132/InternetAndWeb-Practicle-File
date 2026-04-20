function validateForm() {
    var name = document.getElementById("name").value;
    var password = document.getElementById("password").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var namePattern = /^[A-Za-z ]+$/;
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var phonePattern = /^[0-9]{10}$/;

    if (!namePattern.test(name) || name.length < 6) {
        alert("Name should contain only alphabets and be at least 6 characters long.");
        return false;
    }

    if (password.length < 6) {
        alert("Password should be at least 6 characters long.");
        return false;
    }

    if (!emailPattern.test(email)) {
        alert("Enter a valid email address.");
        return false;
    }

    if (!phonePattern.test(phone)) {
        alert("Phone number should contain exactly 10 digits.");
        return false;
    }

    alert("Form submitted successfully.");
    return true;
}
