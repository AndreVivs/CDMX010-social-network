//Contiene toda la lógica del enrutamiento
import {home} from "./home.js"
import {about} from "./about.js"
import {contact} from "./contact.js"

console.log("holis crayolis")

const routes = {
    '/' : home,
    '/contact' : contact,
    '/about' : about
  };

const rootDiv = document.getElementById('root');
rootDiv.innerHTML = routes[window.location.pathname];

//method that takes pathname and render section according to it
const onNavigate = (pathname) => {
    window.history.pushState(
        {}, //Estado
        pathname, //Titulo
        window.location.origin + pathname //Ruta 
    )
    rootDiv.innerHTML = routes[pathname]
}

window.onpopstate = () => {
    rootDiv.innerHTML = routes[window.location.pathname]
  }

  window.onNavigate = onNavigate;

  const h = document.getElementById("home");
  const a = document.getElementById("about");
  const c = document.getElementById("contact");

h.addEventListener("click", (e) => {
  e.preventDefault();
  onNavigate('/')
});

a.addEventListener("click", (e) => {
  e.preventDefault();
  onNavigate('/about')
});

c.addEventListener("click", (e) => {
  e.preventDefault();
  onNavigate('/contact')
});