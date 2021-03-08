import { onNavigate } from './routers.js';
import { register, loginGoogle, accessJalo, historyRef } from './firebase.js';

//Función para mandar llamar el id que se usa para el evento para ir de home a login.
const createNewUser = () => {
  const createUser = document.getElementById('newUser');
  createUser.addEventListener('click', (e) => {
    e.preventDefault();
    onNavigate('/login');
  });
};

window.addEventListener('DOMContentLoaded', () => createNewUser());

// Función para mandar llamar el id que se usa para el evento para ir de home a home-login.
const oldUser1 = () => {
  const enter = document.getElementById('oldUser');
  enter.addEventListener('click', (e) => {
    e.preventDefault();
    onNavigate('/home-login');
  });
};

window.addEventListener('DOMContentLoaded', () => oldUser1());

// login a wall
const buttonLogin = () => {
  const youLogin = document.getElementById('checkIn');
  youLogin.addEventListener('click', (e) => {
    // verificarPasswords()
    e.preventDefault();
    register();
  });
};

window.addEventListener('DOMContentLoaded', () => buttonLogin());

// Google a wall
const buttonGoogle = () => {
  const youLoginGoogle = document.getElementById('buttonGoogle');
  youLoginGoogle.addEventListener('click', (e) => {
    e.preventDefault();
    loginGoogle();
  });
};
window.addEventListener('DOMContentLoaded', () => buttonGoogle());

// Google a wall con inputs
const buttonGoogleInput = () => {
  const youLoginGoogleInputs = document.getElementById('buttonLoginInputs');
  youLoginGoogleInputs.addEventListener('click', (e) => {
    e.preventDefault();
    accessJalo();
  });
};
window.addEventListener('DOMContentLoaded', () => buttonGoogleInput());


//Publicated post in Wall
let buttonHistories = document.getElementById('save');
buttonHistories.addEventListener('click', (e) => {
    e.preventDefault();
    console.log('si escucho');
    let title = document.getElementById('task-InputNewPublication').value;
    let description = document.getElementById('task-contentPublication').value;
    
    historyRef(title, description);
    console.log(title, description);
    buttonHistories.resert();
});
