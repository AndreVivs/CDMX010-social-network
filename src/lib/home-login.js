//Vista que te da acceso cuando ya te encuentras logueada.
export const homeLogin = () => `
  <div class='home-login'>
    <div class='logoHomeLogin'>
      <img src='assets/logo-login.png'>
    </div>
    <h3>Login</h3>
    <form class='containerFlexCenter3'>
      <div class="containerGoogle">
      <button id='buttonGoogle'></button>
      </div>

      <input type="email" id="emailOldUser" class='styleFormLoginHome' placeholder="e-mail"/>
      <input type="password" id="passwordOldUser" class='styleFormLoginHome' placeholder="password"/>
      <button id='buttonLoginInputs' class='buttonsLogin'>Entrar</button>
    </form>
  </div>`;