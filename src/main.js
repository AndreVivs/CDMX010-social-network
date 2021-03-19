import { onNavigate } from './routers.js';
import { register, loginGoogle, accessJalo, savePost, getData} from './firebase.js';


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


const buttonEliminar = document.getElementsByClassName('buttonNewPublication2 deletePublication');
console.log(buttonEliminar);
console.log(buttonEliminar[0]);

var listButtons = document.getElementsByClassName("buttonNewPublication2 deletePublication");
for (let item of listButtons) {
    console.log(item);
}

/*buttonEliminar.forEach((btn) => {
    console.log("hola soy el boton");
     btn.addEventListener("click", (e) => {
        
    })
});*/


    /*const buttonContainer = document.getElementById('buttonCard');
    const buttonEliminar = document.getElementById('deletePublication');
    console.log(buttonEliminar);*/

    /*buttonEliminar.addEventListener('click', (e) => {
        
        console.log('si escucho');
    });


  buttonEliminar.forEach((btn) =>
     btn.addEventListener("click", (e) => {
        eliminar();

     })
   );*/

 


