
export const myFunction2 = () => {
  // aqui tu codigo
  console.log('Hola mundotito!');
};

//Vista que te da acceso cuando ya te encuentras logueada.
export const homeLogin = () => `
  <div class='homeLogin'>
    <div class='logo2'>
      <img src='assets/logo-login.png'>
    </div>
    <form class='flexCenter3'>
        <h3>Login</h3>
        <div class='google'>
        <img src='assets/Logo-google.png'>
        </div>
        <form class='flexCenter3'>
        <input type="email" id="emailLog" class='formLogin2' placeholder="e-mail"/>
        <input type="password" id="passwordLog" class='formLogin2' placeholder="password"/>
        <button onclick="acceso()" class='buttons3'>Entrar</button>
        </form>
        <h3 id="login"></h3>
    </form>
  </div>
  `;