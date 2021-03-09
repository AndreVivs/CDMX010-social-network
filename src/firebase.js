/* eslint-disable no-unused-vars */
/* eslint-disable no-alert */
/* eslint-disable consistent-return */
import { onNavigate } from './routers.js';
import { cardWall } from './lib/card-wall.js';

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
const db = firebase.firestore();

// let praintCards = document.querySelector("tasks-container");
const praintCards = document.querySelector('#tasks-container');
const setupPost = (data) => {
  if (data.length) {
    let html = '';
    data.forEach((doc) => {
      const post = doc.data();
      // // console.log(post);
      const praint = cardWall(post);
      html += praint;
    });
    praintCards.innerHTML = html;
  } else {
    praintCards.innerHTML = '<p>Login to see Posts</p>';
  }
};

// Register function
export function register() {
  const email = document.getElementById('email').value;
  const name = document.getElementById('name').value;
  const password = document.getElementById('password').value;
  const password2 = document.getElementById('passwordToVerify').value;
  if (password !== password2) {
    document.getElementById('error').classList.add('mostrar');
    return false;
  }
  if (password === password2) {
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
        // showAlert()

        alert(`Bienvenidx a Jalö ${name}
      !Tu red social para escribir sobre tus lugares magicos en el mundo!`);
      })
      .catch((error) => {
        // // console.log(error);
        const errorMessage = error.message;
        alert(errorMessage, 4000);
      });

    return true;
  }
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // const uid = user.uid;
      db.collection('Histories')
        .get()
        .then((snapshot) => {
          // // console.log(snapshot.docs);
          setupPost(snapshot.docs);
        });
    } else {
      // // console.log('auth: dign out');
    }
  });
}

// Login google function
export function loginGoogle() {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth()
    .signInWithPopup(provider)
    .then((result) => {
      const credential = result.credential;
      const token = credential.accessToken;
      const user = result.user;
      onNavigate('/wall');
    })
    .catch((error) => {
      // // console.log(error);
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage, 4000);
      const email = error.email;
      const credential = error.credential;
    });
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // const uid = user.uid;
      db.collection('Histories')
        .get()
        .then((snapshot) => {
          // console.log(snapshot.docs);
          setupPost(snapshot.docs);
        });
    } else {
      // // console.log('auth: dign out');
    }
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
  // $('.modal').modal('close')
    .catch((error) => {
      // // console.log(error);
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage, 4000);
    });

  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      const uid = user.uid;
      db.collection('Histories')
        .get()
        .then((snapshot) => {
          // console.log(snapshot.docs);
          setupPost(snapshot.docs);
        });
    } else {
      // // console.log('auth: dign out');
    }
  });
}

// publication in wall (generar documentos en firebas)
export const historyRef = (title, description) => {
  db.collection('Histories').doc().set({
    title,
    description,
  }).then(() => {
    // // console.log('history saved');
  })
    .catch((error) => {
      // console.log('Got an error: '.error);
      // console.log(error);
    });

  // console.log(historyRef);
  // console.log('funciono');
  // console.log(title, description);
};

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    const uid = user.uid;
    db.collection('Histories')
      .get()
      .then((snapshot) => {
        // console.log(snapshot.docs);
        setupPost(snapshot.docs);
      });
  } else {
    // console.log('auth: dign out');
  }
});
