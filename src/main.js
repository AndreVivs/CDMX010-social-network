<<<<<<< HEAD
//Este es el punto de entrada de tu aplicacion
/*import { myFunction } from './lib/index.js';

myFunction();*/
=======

import {myFunction1} from './lib/login.js'
import { onNavigate } from './routers.js';


myFunction1();


const theHome1 = () => {
    console.log('HOla');
    let login = document.getElementById('login');
    console.log(login);
    login.addEventListener('click', (e) => {
        //e.preventDefault();
        onNavigate('/login')
    });
};

 window.addEventListener('click', theHome1());



/*export const theLogin = (user) => {
let two  = login(user)
return two
}; */
>>>>>>> 94c1d9c23a7fda4815c0410419395a6ea8c2d4ca
