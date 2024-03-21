document.addEventListener("DOMContentLoaded", function () {
    // Handle login form submission
    document.getElementById("login-form").addEventListener("submit", function (event) {
      event.preventDefault();
      // Handle login logic here
      alert("Login logic placeholder");
    });
  
    // Handle register form submission
    document.getElementById("register-form").addEventListener("submit", function (event) {
      event.preventDefault();
      // Collect registered user details
      const name = document.getElementById("register-name").value;
      const email = document.getElementById("register-email").value;
      const password = document.getElementById("register-password").value;
      // Show registered user details in the popup modal
      document.getElementById("popup-content").innerHTML = `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Password:</strong> ${password}</p>
      `;
      $('#popup').modal('show'); // Show the modal
    });
  
    // Facebook login button logic (placeholder)
    document.getElementById("facebook-login").addEventListener("click", function () {
      alert("Facebook login placeholder");
    });
  
    // Google login button logic (placeholder)
    document.getElementById("google-login").addEventListener("click", function () {
      alert("Google login placeholder");
    });
  });
  