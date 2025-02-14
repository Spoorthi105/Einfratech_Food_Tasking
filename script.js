function handleSignUp(event) {
    // Prevent the form from submitting the traditional way
    event.preventDefault();

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Perform any validation if needed
    if (name && email && password) {
        // Display success message
        alert('Signed up successfully!');

        // Optionally, you can reset the form
        document.getElementById('signup-form').reset();

        // Optionally, redirect the user to another page
        // window.location.href = 'index.html';
    } else {
        alert('Please fill out all fields.');
    }
}