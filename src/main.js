import { onNavigate } from './routers.js';
import { register, loginGoogle, accessJalo, savePost, getData,} from './firebase.js';


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
    };
    if (!title.value.trim() || !description.value.trim()) {
        alert('Escribe algo antes de publicar!');
        return;
    }

savePost(post)
    .then((docRef) => {
        console.log('Document ID: ', docRef.id)
        title.value = "";
        description.value = "";
    })
    .catch((error) => console.log(error));
});

getData();



/*const buttonDelete = postContainer.querySelectorAll(".deletePublication");
    buttonDelete.forEach((btn) =>
      btn.addEventListener("click", async (e) => {
        if (confirm('¿Estas segurx que quieres eliminar la reseña de viaje?')) {
       // Save it!
       console.log('La historia se ha borrado');
       deleteHistory(e.target.dataset.id);
     } else {
       // Do nothing!
       console.log('No se borro');
     }
       
       
   });*/

