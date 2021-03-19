import { onNavigate } from './routers.js';
import { register, loginGoogle, accessJalo, deleteHistory, savePost, getHistoryEdit, updateHistory, activeUser, getData} from './firebase.js';
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

// Login to wall
const buttonLogin = () => {
  const youLogin = document.getElementById('checkIn');
  youLogin.addEventListener('click', (e) => {
    // verificarPasswords()
    e.preventDefault();
    register();
  });
};

window.addEventListener('DOMContentLoaded', () => buttonLogin());

// Google to wall
const buttonGoogle = () => {
  const youLoginGoogle = document.getElementById('buttonGoogle');
  youLoginGoogle.addEventListener('click', (e) => {
    e.preventDefault();
    loginGoogle();
  });
};

window.addEventListener('DOMContentLoaded', () => buttonGoogle());

// SingIn with inputs
const buttonSingIn = () => {
  const singInWithInputs = document.getElementById('buttonLoginInputs');
  singInWithInputs.addEventListener('click', (e) => {
    e.preventDefault();
    accessJalo();
  });
};

window.addEventListener('DOMContentLoaded', () => buttonSingIn());

// The actions in inputs div wall.
const like = [];
let editStatus = false;
let id = '';
const buttonHistories = document.getElementsByClassName('save');
const formHistories = document.getElementById('task-formPublication');
const updatePost = document.querySelector('#history-container');
updatePost.addEventListener('click', async (e) => {
  if (e.target.classList.contains('save')) {
    e.preventDefault();
    const title = document.getElementById('task-InputNewPublication');
    const description = document.getElementById('task-contentPublication');

    try {
      // Lógica de publicación.
      if (!title.value.trim() || !description.value.trim()) {
        alert('Escribe algo antes de publicar!');
      }
      if (!editStatus) {
        await savePost(title.value, description.value, like);
        console.log('si se guardo');
      } else {
        // Lógica de edición.
        await updateHistory(id, {
          title: title.value,
          description: description.value,
        });
        console.log('Si estoy');
        editStatus = false;
        id = '';
        buttonHistories[0].innerText = 'Save';
      }

      formHistories.reset();
      title.focus();
    } catch (error) {
      console.log(error);
    }
  }
});

// Put all the histories and delete
const printCards = document.querySelector('#tasks-container');
printCards.addEventListener('click', async (e) => {
// Lógica de borrar.
  if (e.target.classList.contains('deletePublication')) {
    console.log('si puedo borrar');
    if (confirm('¿Estas segurx que quieres eliminar la reseña de viaje?')) {
      // Save it!
      console.log('La historia se ha borrado');
      console.log(e.target.dataset.id);
      await deleteHistory(e.target.dataset.id);
    } else {
      // Do nothing!
      console.log('No se borro');
    }
  }

  // Lógica para guardar publicación editada.
  if (e.target.classList.contains('editPublication')) {
    try {
      // const buttonHistories = document.getElementsByClassName('save');
      console.log('editando'); 
      console.log(e.target.dataset.id);
      const doc = await getHistoryEdit(e.target.dataset.id);
      const post = doc.data();
      const title = document.getElementById('task-InputNewPublication');
      const description = document.getElementById('task-contentPublication');
      title.alue = post.title;
      description.value = post.description;
      buttonHistories[0].innerText = 'Guardar';
      console.log(buttonHistories[0], 'si jalo');
      editStatus = true;
      id = doc.id;
    } catch (error) {
      console.log(error);
    }
  }
  // Like finction
  if (e.target.classList.contains('desenviaja')) {
    const user = activeUser();
    // let likeStatusT = true;
    console.log('Like');
    const id = e.target.dataset.id;
    console.log(id, 'este es el id de la historia para like');
    const docJalo = await getHistoryEdit(id);
    const postJalo = docJalo.data();
    // Deslike quitando usuario del arreglo
    // const incluye = includes(user.email);
    if (postJalo.like.includes(user.email)) {
      const filteredEmails = postJalo.like.filter((email) => email !== user.email);
      const updates = { like: filteredEmails };
      await updatePost(id, updates);
    } else {
    // Like agregando usuario al arreglo
      postJalo.like.push(user.email);
      const updates = { like: postJalo.likes };
      await updateHistory(id, updates);
      const totalLike = like.length;
      console.log(totalLike, 'numero de likes');
    }
  }
});
