import { onNavigate } from './routers.js';
import { cardWall } from './lib/card-wall.js';

let firebaseConfig = {
  apiKey: "AIzaSyD3aAkKByGRk-VIP9Cyl-REmYc6fi02mLc",
  authDomain: "appjalo.firebaseapp.com",
  projectId: "appjalo",
  storageBucket: "appjalo.appspot.com",
  messagingSenderId: "1014914893734",
  appId: "1:1014914893734:web:dd26aa6f73aa3f31dc3167",
  measurementId: "G-HRFRTE48DF"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


//Register function
export function register (){
  let email = document.getElementById('email').value;
  let name = document.getElementById('name').value;
  let password = document.getElementById('password').value;
  let password2 = document.getElementById('passwordToVerify').value;
  if (password != password2) {
    document.getElementById("error").classList.add("mostrar");
    return false;
  } 
  if (password === password2){
    document.getElementById("error").classList.remove("mostrar");
    document.getElementById("ok").classList.remove("ocultar");
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((result) => {
      //Signed in
      //verificarPasswords();
      onNavigate('/wall');
      // } else {
      //     showModals(noVerification);
      //     firebase.auth().signOut();
      //showAlert()
      
      alert(`Bienvenidx a Jalö ${name}
      !Tu red social para escribir sobre tus lugares magicos en el mundo!`);
  })
    .catch((error) => {
      console.log(error);
      console.log("nmms");
      let errorMessage = error.message;
      alert(errorMessage, 4000);
    })
    return true; 
  }
  firebase.auth().onAuthStateChanged(user);
};

  

//Login google function
export function loginGoogle (){
  let provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth()
  .signInWithPopup(provider)
    .then((result) => {
      let credential = result.credential;
      let token = credential.accessToken;
      let user = result.user;
      onNavigate('/wall');
    })
    .catch((error) => {
      console.log(error);
      let errorCode = error.code;
      let errorMessage = error.message;
      alert(errorMessage, 4000);
      let email = error.email;
      credential = error.credential;
   });
   firebase.auth().onAuthStateChanged(user);
};

//Access jalo function
export function accessJalo (){
  let emailLog = document.getElementById('emailOldUser').value;
  let passwordLog = document.getElementById('passwordOldUser').value;
  firebase.auth().signInWithEmailAndPassword(emailLog, passwordLog)
    .then(result => {
      onNavigate('/wall');
      
      })
      //$('.modal').modal('close')
    .catch((error) => {
      console.log(error);
      let errorCode = error.code;
      let errorMessage = error.message;
      alert(errorMessage, 4000);
    });
    firebase.auth().onAuthStateChanged(user);
};

//guardar la publicacion a firebasen ESTE ES HISTORY FER DE MIRI
const db = firebase.firestore();

export const savePost = (post) => db.collection('Histories')
    .add({
     title: post.title,
     description: post.description,
     date: Date.now()
    })
  .then((docRef) => {
      console.log("Document written with ID: ", docRef.id);
      document.getElementById('task-InputNewPublication').value = "";
      document.getElementById('task-contentPublication').value = "";
  })
  .catch((error) => {
      console.error("Error adding document: ", error);
  });
  

export const postContainer = document.getElementById('tasks-container');


    export const getData = () => {
      db.collection("Histories").orderBy("date", "desc")
        .onSnapshot((querySnapshot) =>{
          postContainer.innerHTML = "";
          querySnapshot.forEach((doc) =>{
            const post = doc.data();
            postContainer.innerHTML += cardWall(post, doc.id);
            console.log(post);

          });

        });

    };

   export function eliminar (id){
      db.collection("Histories").doc(id).delete().then(() => {
        console.log(id)
        console.log("Document successfully deleted!");
    }).catch((error) => {
        console.error("Error removing document: ", error);
    });
  };


//videoinstruccions and stuff

export function editar (id, title, description) {
  
  document.getElementById('task-InputNewPublication').value = title;
  document.getElementById('task-contentPublication').value = description;

  const editButton = document.createElement('button');
  const spaceToPrint = document.getElementById('buttons-group');

  editButton.textContent = 'Editar';
  editButton.classList.add('buttonNewPublication');
  spaceToPrint.appendChild(editButton);
  
  //const editButton = document.getElementById('save')
  //editButton.innerHTML = 'Editar';


  editButton.onclick = function (){
     event.preventDefault();
     console.log("hey")
     
      const postToUpDate = db.collection("Histories").doc(id);

      const titleU = document.getElementById('task-InputNewPublication').value;
      const descriptionU = document.getElementById('task-contentPublication').value;
      
      return postToUpDate.update({
          title : titleU,
          description : descriptionU,
      })
      .then(() => {
          console.log("Document successfully updated!");
          //editButton.innerHTML = 'Publicar';
          document.getElementById('task-InputNewPublication').value = "";
          document.getElementById('task-contentPublication').value = "";
          //aqui debería ir el remove boton
          editButton.textContent = 'Publicar';

      })
      .catch((error) => {
          // The document probably doesn't exist.
          console.error("Error updating document: ", error);
      });
        
    }
};
  




