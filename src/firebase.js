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

export function activeUser() {
  return firebase.auth().currentUser;
}

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
        console.log(error);
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
    .then((result) => {
      const credential = result.credential;
      const token = credential.accessToken;
      const user = result.user;
      onNavigate('/wall');
    })
    .catch((error) => {
      console.log(error);
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage, 4000);
      const email = error.email;
      const credential = error.credential;
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
      console.log(error);
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage, 4000);
    });
}

// guardar la publicacion a firebase
export const savePost = (title, description, like) => {
  db.collection('Histories').doc().set({
    title,
    description,
    like
  }).then(() => {
    console.log('history saved');
  })
    .catch((error) => {
      console.log('Got an error: '.error);
      console.log(error);
    });
};

const orderDate = () => { db.collection('Histories').orderBy('date'); };
export const getData = () => {
  console.log('ejecucion de getData');
  db.collection('Histories')
    .onSnapshot((querySnapshot) => {
      // let html = '';
      const PostContainer = document.getElementById('tasks-container');
      PostContainer.innerHTML = '';
      querySnapshot.forEach((doc) => {
        const post = doc.data();
        console.log(post);
        post.id = doc.id;
        // html += cardWall(post);
        PostContainer.innerHTML += cardWall(post);
      });
      orderDate();
    });
};

export const deleteHistory = (id) => db.collection('Histories').doc(id).delete();
// Edit to publiation
// Const getHistories = db.collection('Histories').get();
export const getHistoryEdit = (id) => db.collection('Histories').doc(id).get();
export const updateHistory = (id, updatedHistory) => db.collection('Histories').doc(id).update(updatedHistory);
