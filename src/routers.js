// Este es el punto de entrada de tu aplicacion
import { myFunction, home } from './lib/home.js'
import { login } from './lib/login.js';
import { wall } from './lib/wall.js';
import { profile } from './lib/profile.js';

myFunction();



export const routes = {
    '/': home, 
    '/login':login,
    '/wall' : wall,
    '/profile' : profile
};

const rootDiv = document.getElementById('root');
export const onNavigate = (pathname) => {
    window.history.pushState(
        {},
        pathname,
        window.location.origin + pathname
    )
    rootDiv.innerHTML = routes[pathname]
};
window.onpopstate = () => {
    rootDiv.innerHTML = routes[window.location.pathname]
  }

rootDiv.innerHTML =routes[window.location.pathname];
