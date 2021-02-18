
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