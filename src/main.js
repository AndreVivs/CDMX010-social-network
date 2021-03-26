import { onNavigate } from './routers.js';
import { register, loginGoogle, accessJalo, savePost, getData, eliminar, editar} from './firebase.js';
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



//Publicated post in Wall
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
        isLike: false,
    };
    if (!title.value.trim() || !description.value.trim()) {
        alert('Escribe algo antes de publicar!');
        return;
    }

    savePost(post);

});

getData();


  let printCards = document.querySelector('#tasks-container');
    printCards.addEventListener('click', (e) => {
    //lógica de borrar.
    if ( e.target.classList.contains('deletePublication')) {
        const valueId = e.target.getAttribute('docid')
        console.log(e)
        console.log('si escucha el boton')
        console.log(valueId)
        eliminar(valueId);
       
    }; 
});

//stuff del boton de editar, sirve ya

    printCards.addEventListener('click', (e) => {
    //lógica de editar.
    if ( e.target.classList.contains('editPublication')) {
        const valueId = e.target.getAttribute('docid')
        const valueTitle = e.target.getAttribute('titleid')
        const valueDescription = e.target.getAttribute('descriptionid')
        //console.log(e)
        //console.log(valueId, ",doc id del documento a editar")
        //console.log(valueTitle, ",doc Title del documento a editar")
        //console.log(valueDescription, ",doc description del documento a editar")
        console.log('si escucha el boton de editar yass')

        editar(valueId, valueTitle, valueDescription);
       
       
    }; 
});

