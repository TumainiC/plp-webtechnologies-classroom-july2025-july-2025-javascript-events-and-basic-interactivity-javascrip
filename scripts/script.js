// Part 1: JavaScript Event Handling and Interactive Elements

// Dark mode toggle button functionality
const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;

darkModeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
});

// Hovering over the text boxes to highlight them
const textBoxes = document.querySelectorAll('input[type="text"], input[type="email"], input[type="password"]');

textBoxes.forEach(box => {
    box.addEventListener('mouseover', () => {
        box.classList.add('highlight');
    });
    box.addEventListener('mouseout', () => {
        box.classList.remove('highlight');
    });
});

// Keyboardevents
// Get the form inputs
const usernameInput = document.getElementById('username');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');

// Show feedback when user types in username
usernameInput.addEventListener('keyup', () => {
    const usernameError = document.getElementById('usernameError');
    const value = usernameInput.value;
    
    if (value.length < 3) {
        usernameError.textContent = 'Username needs at least 3 characters';
    } else {
        usernameError.textContent = '';
    }
});

// Show feedback when user types in email
emailInput.addEventListener('keyup', () => {
    const emailError = document.getElementById('emailError');
    const value = emailInput.value;
    
    if (value.includes('@') && value.includes('.')) {
        emailError.textContent = '';
    } else {
        emailError.textContent = 'Please enter a valid email';
    }
});

// Show feedback when user types in password
passwordInput.addEventListener('keyup', () => {
    const passwordError = document.getElementById('passwordError');
    const value = passwordInput.value;
    
    if (value.length < 6) {
        passwordError.textContent = 'Password needs at least 6 characters';
    } else {
        passwordError.textContent = '';
    }
});

// Form submission handling
// Get the form and message elements
const form = document.getElementById('form');
const messageDiv = document.getElementById('message');

// When user submits the form
form.addEventListener('submit', (e) => {
    e.preventDefault(); // Stop the form from submitting normally
    
    // Get the values from inputs
    const username = usernameInput.value;
    const email = emailInput.value;
    const password = passwordInput.value;
    
    // Simple validation checks
    let isValid = true;
    
    // Check username
    if (username.length < 3) {
        document.getElementById('usernameError').textContent = 'Username too short!';
        isValid = false;
    }
    
    // Check email
    if (!email.includes('@') || !email.includes('.')) {
        document.getElementById('emailError').textContent = 'Email is not valid!';
        isValid = false;
    }
    
    // Check password
    if (password.length < 6) {
        document.getElementById('passwordError').textContent = 'Password too short!';
        isValid = false;
    }
    
    // Show success or error message
    if (isValid) {
        messageDiv.textContent = 'Success! Form submitted!';
        messageDiv.className = 'message success';
    } else {
        messageDiv.textContent = 'Please fix the errors above';
        messageDiv.className = 'message error';
    }
});

// Clear button functionality
const clearButton = document.getElementById('clearForm');

clearButton.addEventListener('click', () => {
    // Clear all the input fields
    usernameInput.value = '';
    emailInput.value = '';
    passwordInput.value = '';
    
    // Clear all error messages
    document.getElementById('usernameError').textContent = '';
    document.getElementById('emailError').textContent = '';
    document.getElementById('passwordError').textContent = '';
    
    // Clear the main message
    messageDiv.textContent = '';
    messageDiv.className = 'message';
});