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
/*const home = document.getElementById("home");
const about = document.getElementById("about");
const contact = document.getElementById("contact");*/

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

/*home.addEventListener("click", function() {
  onNavigate('/home')
})
about.addEventListener("click",onNavigate('/about'))
contact.addEventListener("click",onNavigate('/contact'))*/

console.log(onNavigate);

window.onpopstate = () => {
    rootDiv.innerHTML = routes[window.location.pathname]
  }

  window.onNavigate = onNavigate;