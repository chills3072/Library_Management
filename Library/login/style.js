

// // Aesthetically pleasing and optimized loading animation
// window.addEventListener('load', () => {
//     const loadingAnimation = document.getElementById('loading-animation');
//     loadingAnimation.style.display = 'none';
//   });
  
//   // New user signup and login functionality
//   const signupForm = document.getElementById('signup-form');
//   const loginForm = document.getElementById('login-form');
  
//   signupForm.addEventListener('submit', handleSignup);
//   loginForm.addEventListener('submit', handleLogin);
  
//   function handleSignup(event) {
//     event.preventDefault();
  
//     const name = document.getElementById('signup-name').value;
//     const email = document.getElementById('signup-email').value;
//     const password = document.getElementById('signup-password').value;
  
//     // Perform form validation
//     if (!name || !email || !password) {
//       alert('Please fill in all the required fields.');
//       return;
//     }
  
//     // Perform signup API request and handle response
//     fetch('API_URL/signup', {
//       method: 'POST',
//       body: JSON.stringify({ name, email, password }),
//       headers: {
//         'Content-Type': 'application/json'
//       }
//     })
//       .then(response => response.json())
//       .then(data => {
//         // Handle successful signup
//         console.log('Signup successful:', data);
//       })
//       .catch(error => {
//         // Handle signup error
//         console.error('Signup error:', error);
//       });
//   }
  
  // function handleLogin(event) {
  //   event.preventDefault();
  
  //   const email = document.getElementById('login-email').value;
  //   const password = document.getElementById('login-password').value;
  
  //   // Perform form validation
  //   if (!email || !password) {
  //     alert('Please enter your email and password.');
  //     return;
  //   }
  
  //   // Perform login API request and handle response
  //   fetch('API_URL/login', {
  //     method: 'POST',
  //     body: JSON.stringify({ email, password }),
  //     headers: {
  //       'Content-Type': 'application/json'
  //     }
  //   })
  //     .then(response => response.json())
  //     .then(data => {
  //       // Handle successful login
  //       console.log('Login successful:', data);
  //     })
  //     .catch(error => {
  //       // Handle login error
  //       console.error('Login error:', error);
  //     });
  // }
  

document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form submission

  // Clear previous error messages
  clearErrorMessages();

  // Get input values
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

 // Validate username and password
 
    if (username === "") {
    displayErrorMessage("Please enter a username");
  } else if (password === "") {
    displayErrorMessage("Please enter a password");
  } else if (username === "admin" && password === "hello") {
    alert("Login successful");
    // Redirect to a different page after successful login
    window.location.href='Home/home.html';
  } else {
    displayErrorMessage("Invalid username or password");
  }

  
});