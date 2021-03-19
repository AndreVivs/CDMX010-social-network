import { onNavigate } from './routers.js';
import { register, loginGoogle, accessJalo, savePost, getData} from './firebase.js';
import { cardWall } from './lib/card-wall.js';



//Función para mandar llamar el id que se usa para el evento para ir de home a login.
const createNewUser = () => {
    let createUser = document.getElementById('newUser');
    createUser.addEventListener('click', (e) => {
        e.preventDefault();
        onNavigate('/login');
    });
};

window.addEventListener('DOMContentLoaded', () => createNewUser());


//Función para mandar llamar el id que se usa para el evento para ir de home a home-login.
const oldUser1 = () => {
    let enter = document.getElementById('oldUser');
    enter.addEventListener('click', (e) => {
        e.preventDefault();
        onNavigate('/home-login');
    });
};

window.addEventListener('DOMContentLoaded', () => oldUser1());



//login to wall
const buttonLogin = () => {
    let youLogin = document.getElementById('checkIn');
    youLogin.addEventListener('click', (e) => {
        //verificarPasswords()
        e.preventDefault();
        register();
    });
};

window.addEventListener('DOMContentLoaded', () => buttonLogin());


//Google to wall
const buttonGoogle = () => {
    let youLoginGoogle = document.getElementById('buttonGoogle');
    youLoginGoogle.addEventListener('click', (e) => {
        e.preventDefault();
        loginGoogle();
    });
};
window.addEventListener('DOMContentLoaded', () => buttonGoogle());


//Google a wall with inputs
const buttonGoogleInput = () => {
    let youLoginGoogleInputs = document.getElementById('buttonLoginInputs');
    youLoginGoogleInputs.addEventListener('click', (e) => {
        e.preventDefault();
        accessJalo();
    });
};
window.addEventListener('DOMContentLoaded', () => buttonGoogleInput());



//Publicated porst in Wall
const buttonHistories = document.getElementById('save');
const title = document.getElementById('task-InputNewPublication');
const description = document.getElementById('task-contentPublication');


buttonHistories.addEventListener('click', (e) => {
    e.preventDefault();
    console.log('si escucho');
    const post = {
        title : title.value,
        description : description.value,
        date: Date.now(),
        DocumentId: 'docRef.id',
    };
    if (!title.value.trim() || !description.value.trim()) {
        alert('Escribe algo antes de publicar!');
        return;
    }

    savePost(post);
    /*.then((docRef) => {
        //console.log('Document ID: ', docRef.id)
        title.value = "";
        description.value = "";
    })
    .catch((error) => console.log(error));*/
});

getData();


const buttonEliminar = document.querySelector('#deletePublication');
console.log(buttonEliminar);
console.log(buttonEliminar[0]);


export function eliminar (id){
    console.log("hola boton delate");
    /*db.collection("Histories").doc(id).delete().then(() => {
      console.log("Document successfully deleted!");
  }).catch((error) => {
      console.error("Error removing document: ", error);
  });*/
  };
