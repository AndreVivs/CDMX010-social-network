import { myFunction1 } from './lib/login.js';
import { onNavigate } from './routers.js';
import { myFunction } from './lib/home.js';
import { myFunction2 } from './lib/home-login.js';
import { registrarse } from './firebase.js';

myFunction();
myFunction1();
myFunction2();

//Función para mandar llamar el id que se usa para el evento para ir de home a login.
const createNewUser = () => {
    console.log('HOla');
    let createUser = document.getElementById('newUser');
    console.log(createUser);
    createUser.addEventListener('click', (e) => {
        e.preventDefault();
        onNavigate('/login');
    });
};

window.addEventListener('DOMContentLoaded', () => createNewUser());


//Función para mandar llamar el id que se usa para el evento para ir de home a home-login.
const oldUser1 = () => {
    console.log('HOla');
    let enter = document.getElementById('oldUser');
    console.log(enter);
    enter.addEventListener('click', (e) => {
        e.preventDefault();
        onNavigate('/home-login');
    });
};

window.addEventListener('DOMContentLoaded', () => oldUser1());


//login a wall
const buttonLogin = () => {
    console.log('again');
    let youLogin = document.getElementById('checkIn');
    console.log(youLogin);
    youLogin.addEventListener('click', (e) => {
        e.preventDefault();
        console.log('lo que sea');
        registrarse();
        onNavigate('/wall');
    });
};

window.addEventListener('DOMContentLoaded', () => buttonLogin());
