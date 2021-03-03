import { onNavigate } from './routers.js';

const firebaseConfig = {
  apiKey: 'AIzaSyAphkTjnCyuMEe9J2BlkLSnRf11LDrRKq8',
  authDomain: 'jaloredsocial.firebaseapp.com',
  projectId: 'jaloredsocial',
  storageBucket: 'jaloredsocial.appspot.com',
  messagingSenderId: '438968128013',
  appId: '1:438968128013:web:9d1b47242a6f58c825bb44',
  measurementId: 'G-8FRZGM62BF',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Register function
export function register() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const password2 = document.getElementById('passwordToVerify').value;
  if (password !== password2) {
    document.getElementById('error').classList.add('mostrar');
    return false;
  } if (password === password2) {
    document.getElementById('error').classList.remove('mostrar');
    document.getElementById('ok').classList.remove('ocultar');
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(() => {
      // Signed in
      // verificarPasswords();
        onNavigate('/wall');
      // } else {
      //     showModals(noVerification);
      //     firebase.auth().signOut();
      })
      .catch((error) => {
        const errorMessage = error.message;
        alert(errorMessage, 4000);
      });
    return true;
  }
}

// Login google function
export function loginGoogle() {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth()
    .signInWithPopup(provider)
    .then(() => {
      // const credential = result.credential;
      // const token = credential.accessToken;
      // const user = result.user;
      onNavigate('/wall');
    })
    .catch((error) => {
      // const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage, 4000);
      // const email = error.email;
      // const credential = error.credential;
    });
}

// Access jalo function
export function accessJalo() {
  const emailLog = document.getElementById('emailOldUser').value;
  const passwordLog = document.getElementById('passwordOldUser').value;
  firebase.auth().signInWithEmailAndPassword(emailLog, passwordLog)
    .then(() => {
      onNavigate('/wall');
    })
    .catch((error) => {
      // const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage, 4000);
    });

  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // const uid = user.uid;
    }
  });
}
