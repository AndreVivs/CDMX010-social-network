
var firebaseConfig = {
  apiKey: "AIzaSyAphkTjnCyuMEe9J2BlkLSnRf11LDrRKq8",
  authDomain: "jaloredsocial.firebaseapp.com",
  projectId: "jaloredsocial",
  storageBucket: "jaloredsocial.appspot.com",
  messagingSenderId: "438968128013",
  appId: "1:438968128013:web:9d1b47242a6f58c825bb44",
  measurementId: "G-8FRZGM62BF"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


export function registrarse (){
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;
  //alert("email="+email+" password="+password);

  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((user) => {
      // Signed in 
    //   if (result.user.emailVerified) {
    //       onNavigate('/wall');
      
    // } else {
    //     showModals(noVerification);

    //     firebase.auth().signOut();
    })
    .catch((error) => {
        console.log(error);
      var errorMessage = error.message;
      // ..
      alert(errorMessage, 4000);
    })
};
    

// firebase.auth().onAuthStateChanged((user) => {
//   if (user) {
//     // User is signed in, see docs for a list of available properties
//     // https://firebase.google.com/docs/reference/js/firebase.User
//     var uid = user.uid;
//     // ...
//     document.getElementById("loginStatus").innerHTML="Logeado "+user.email;
//     console.log(user);
//   } else {
//     // User is signed out
//     // ...
//     document.getElementById("login").innerHTML="No logeado "+user.email;
//   }
// });




// export function acceso (){
//   var emailLog = document.getElementById('emailLog').value;
//   var passwordLog = document.getElementById('passwordLog').value;
//   //alert("email="+email+" password="+password);
//   firebase.auth().signInWithEmailAndPassword(emailLog, passwordLog)
//     .then((user) => {
//       // Signed in
//       // ...
//     })
//     .catch((error) => {
//       var errorCode = error.code;
//       var errorMessage = error.message;
//       alert(errorMessage);
//     });
// }

// function loginGoogle (){
//   const provider = new firebase.auth.GoogleAuthProvider()

//   firebase.auth()
// .signInWithPopup(provider)
// .then((result) => {
//   /** @type {firebase.auth.OAuthCredential} */
//   var credential = result.credential;

//   // This gives you a Google Access Token. You can use it to access the Google API.
//   var token = credential.accessToken;
//   // The signed-in user info.
//   var user = result.user;
//   // ...
// }).catch((error) => {
//   // Handle Errors here.
//   var errorCode = error.code;
//   var errorMessage = error.message;
//   // The email of the user's account used.
//   var email = error.email;
//   // The firebase.auth.AuthCredential type that was used.
//   var credential = error.credential;
//   // ...
// });

// }
