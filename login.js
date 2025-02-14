function handleLogin(event) {
    // Prevent the form from submitting the traditional way
    event.preventDefault();

    // Get form values
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Perform validation
    if (email && password) {
        alert('Logged in successfully!');
        // Optionally, redirect the user to another page
        // window.location.href = 'index.html';
    } else {
        alert('Please fill out all fields.');
    }
}