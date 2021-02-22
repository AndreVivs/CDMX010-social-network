//Contiene toda la lógica del enrutamiento
import {home} from "./home.js"
import {create} from "./create.js"
import {enter} from "./enter.js"

console.log("holis crayolis")

const routes = {
    '/' : home,
    '/enter' : enter,
    '/create' : create
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
// console.log("esto es onNavigate", onNavigate())
  window.onNavigate = onNavigate;

  const h = document.getElementById("home");
  const createButton = document.getElementById("create");
  const enterButton = document.getElementById("enter");

h.addEventListener("DOMContainerLoaded", (e) => {
  //e.preventDefault();
  onNavigate('/')
  window.onpopstate()
});

createButton.addEventListener("click", (e) => {
  //e.preventDefault();
  onNavigate('/create')
  window.onpopstate()
});

enterButton.addEventListener("click", (e) => {
  //e.preventDefault();
  onNavigate('/enter')
  window.onpopstate()
});