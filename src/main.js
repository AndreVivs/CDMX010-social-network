import { onNavigate } from './routers.js';
import {
  register, loginGoogle, accessJalo, historyRef,
} from './firebase.js';
import { cardWall } from './lib/card-wall.js';
// Función para mandar llamar el id que se usa para el evento para ir de home a login.
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

// Publicated post in Wall
const buttonHistories = document.getElementById('save');
buttonHistories.addEventListener('click', (e) => {
  e.preventDefault();
  // console.log('si escucho');
  const title = document.getElementById('task-InputNewPublication').value;
  const description = document.getElementById('task-contentPublication').value;
  historyRef(title, description);
  // console.log(title, description);
  buttonHistories.reset();
});

// let praintCards = document.querySelector("tasks-container");
const praintCards = document.querySelector('#tasks-container');
export const setupPost = (data) => {
  if (data.length) {
    let html = '';
    data.forEach((doc) => {
      const post = doc.data();
      // // console.log(post);
      const praint = cardWall(post);
      html += praint;
    });
    praintCards.innerHTML = html;
  }
  // Like function
  const counterLikes = document.querySelectorAll('.desenviaja');
  console.log(counterLikes);
  counterLikes.addEventListener('click', () => {
    console.log('like aqui presente');
    const counter = document.getElementById('counter');
    let i = 0;
    if (counter < 1) {
      counter.innerHTML = i++;
    } if (counter === 1) {
      counter.innerHTML = 0;
    }
  });
};
