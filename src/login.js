console.log("hello bitch, im working")

firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      let uid = user.uid;
      // ...
      document.getElementById("login").innerHTML="Logeado "+user.email;
      console.log(user);
    } else {
      // User is signed out
      // ...
      document.getElementById("login").innerHTML="No logeado "+user.email;
    }
  });
  
  
  function registrarse (){
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    //alert("email="+email+" password="+password);
  
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((user) => {
        // Signed in 
        // ...
      })
      .catch((error) => {
        let errorCode = error.code;
        let errorMessage = error.message;
        // ..
        alert(errorMessage);
      });
  }
  
  function acceso (){
    let emailLog = document.getElementById('emailLog').value;
    let passwordLog = document.getElementById('passwordLog').value;
    //alert("email="+email+" password="+password);
    firebase.auth().signInWithEmailAndPassword(emailLog, passwordLog)
      .then((user) => {
        // Signed in
        // ...
      })
      .catch((error) => {
        let errorCode = error.code;
        let errorMessage = error.message;
        alert(errorMessage);
      });
  }

  function loginGoogle (){
    const provider = new firebase.auth.GoogleAuthProvider()

    firebase.auth()
  .signInWithPopup(provider)
  .then((result) => {
    /** @type {firebase.auth.OAuthCredential} */
    let credential = result.credential;

    // This gives you a Google Access Token. You can use it to access the Google API.
    let token = credential.accessToken;
    // The signed-in user info.
    let user = result.user;
    // ...
  }).catch((error) => {
    // Handle Errors here.
    let errorCode = error.code;
    let errorMessage = error.message;
    // The email of the user's account used.
    let email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    let credential = error.credential;
    // ...
  });


  }

//const signUpForm = document.querySelector("#signUpForm");

//signUpForm.addEventListener("")




//probe console.log
//export const myFunction1 = () => {
    // aqui tu codigo
  //  console.log('Hola mundote!');
  
 // };
  
  //This is the loging´page
/*export const login= (`
    <div class='loging'>
    <div>
        <img src='assets/logo-jalo.png'>
        <h2>Bienvenid@, crea tu cuenta</h2>
    </div>
    <div>
        <h3>Registro</h3>
        <input type="email" id="email" placeholder="e-mail"/>
        <input type="password" id="password" placeholder="password"/>
        <button onclick="enviar()">Enviar</button>
        <h3>Login</h3>
        <input type="email" id="emailLog" placeholder="e-mail"/>
        <input type="password" id="passwordLog" placeholder="password"/>
        <button onclick="acceso()">Entrar</button>
        <h3 id="login"></h3>
        <!--verificar PASSWORD-->
    </div>
    <div>
        <button id='newProfile'>Crear</button>
    </div>    
    </div>
    `);
  

//faltan las promesas
  
let firebaseConfig = {
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
      let uid = user.uid;
      // ...
      document.getElementById("login").innerHTML="Logeado "+user.email;
      console.log(user);
    } else {
      // User is signed out
      // ...
      document.getElementById("login").innerHTML="No logeado "+user.email;
    }
  });
  
  
  function enviar (){
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    //alert("email="+email+" password="+password);
  
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((user) => {
        // Signed in
        // ...
      })
      .catch((error) => {
        let errorCode = error.code;
        let errorMessage = error.message;
        // ..
        alert(errorMessage);
      });
  }
  
  function acceso (){
    let emailLog = document.getElementById('emailLog').value;
    let passwordLog = document.getElementById('passwordLog').value;
    //alert("email="+email+" password="+password);
    firebase.auth().signInWithEmailAndPassword(emailLog, passwordLog)
      .then((user) => {
        // Signed in
        // ...
      })
      .catch((error) => {
        let errorCode = error.code;
        let errorMessage = error.message;
        alert(errorMessage);
      });
  }
*/

