function validateLogin(event) {
  event.preventDefault();

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // Example hardcoded credentials
  const correctEmail = "WarisAdmin@gmail.com";
  const correctPassword = "AdminWaris";

  if (email === correctEmail && password === correctPassword) {
    // ✅ Save admin login flag
    localStorage.setItem('isAdmin', 'true');

    // Show success message and button
    document.getElementById('post-login').classList.remove('d-none');

    // Hide the login form
    document.querySelector('.login-form').classList.add('d-none');
    

  } else {
    alert("❌ Wrong credentials");
    localStorage.removeItem('isAdmin'); // just in case
  }

  return false;
}


// // Initialize Firebase
// const firebaseConfig = {
//   apiKey: "AIzaSyCfFBgR1cKDvKQ8K2cu93rUMexFrJ26VBQ",
//   authDomain: "perfume-app-10878.firebaseapp.com",
//   projectId: "perfume-app-10878",
//   storageBucket: "perfume-app-10878.firebasestorage.app",
//   messagingSenderId: "723191079590",
//   appId: "1:723191079590:web:ed86e7b302a0fe752d4a67",
//   measurementId: "G-8SWG7J7LET"
// };

// firebase.initializeApp(firebaseConfig);

// // Handle login
// function validateLogin(event) {
//   event.preventDefault();

//   const email = document.getElementById('email').value;
//   const password = document.getElementById('password').value;

//   firebase.auth().signInWithEmailAndPassword(email, password)
//     .then(userCredential => {
//       const user = userCredential.user;
//       console.log("✅ Logged in:", user.email);

//       // Check if admin
//       if (user.email === "WarisAdmin@gmail.com", user.password==="AdminWaris") {
//         localStorage.setItem("isAdmin", "true");
//       } else {
//         localStorage.setItem("isAdmin", "false");
//       }

//       // Show post-login success UI
//       document.getElementById('post-login').classList.remove('d-none');
//       document.querySelector('.login-form').classList.add('d-none');
//     })
//     .catch(error => {
//       alert("❌ Login failed: " + error.message);
//       localStorage.removeItem("isAdmin");
//     });

//   return false;
// }
