// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
firebase.analytics();
firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    var uid = user.uid;
    // ...
    document.getElementById("login").innerHTML="Binvenid@"+user.email;
    console.log(user);
  } else {
    // User is signed out
    // ...
    document.getElementById("login").innerHTML="No logeado "+user.email;
  }
});
function enviar (){
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;
  //alert("email="+email+" password="+password);
  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((user) => {
      // Signed in
      // ...
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      // ..
      alert(errorMessage);
    });
}
function acceso (){
  var emailLog = document.getElementById('emailLog').value;
  var passwordLog = document.getElementById('passwordLog').value;
  //alert("email="+email+" password="+password);
  firebase.auth().signInWithEmailAndPassword(emailLog, passwordLog)
    .then((user) => {
      // Signed in
      // ...
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      alert(errorMessage);
    });
}

