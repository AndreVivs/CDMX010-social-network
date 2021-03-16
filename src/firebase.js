/* eslint-disable no-unused-vars */
/* eslint-disable no-alert */
/* eslint-disable consistent-return */
import { onNavigate } from './routers.js';
import { cardWall } from './lib/card-wall.js';
import { setupPost } from './main.js';

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
        // console.log(error);
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
      // // console.log(error);
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage, 4000);
      const email = error.email;
      credential = error.credential;
   });
};

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
};

//guardar la publicacion a firebase
const db = firebase.firestore();
export const savePost = (post) => db.collection('Histories')
  .add({
    title: post.title,
    description: post.description,
    date: Date.now(), 
  });
    
const PostContainer = document.querySelector('#tasks-container');
export const getData = () => {
  db.collection("Histories").orderBy("date")
  .onSnapshot((querySnapshot) =>{
    PostContainer.innerHTML = "";
    querySnapshot.forEach((doc) =>{
      const post = doc.data()
      post.id = doc.id;
      PostContainer.innerHTML += cardWall(post);
      console.log(post);
    });
  });
};

export const deleteHistory = id => db.collection('Histories').doc(id).delete();
//Edit to publiation 
//const getHistories = db.collection('Histories').get();
export const getHistoryEdit = id =>  db.collection('Histories').doc(id).get();
export const updateHistory = (id, updatedHistory) => db.collection('Histories').doc(id).update(updatedHistory);
