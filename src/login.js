//probe console.log
export const myFunction1 = () => {
    // aqui tu codigo
    console.log('Hola mundote!');
  
  };
  
  //This is the loging´page
export const login= (`
    <div class='loging'>
    <div>
        <img src='assets/logo-jalo.png'>
        <h2>Bienvenid@, crea tu cuenta</h2>
    </div>
    <div>
        <h3>Registro</h3>
        <input type="email" id="email" placeholder="e-mail"/>
        <input type="password" id="password" placeholder="password"/>
        <button onclick="enviar()">Enviar</button>
        <h3>Login</h3>
        <input type="email" id="emailLog" placeholder="e-mail"/>
        <input type="password" id="passwordLog" placeholder="password"/>
        <button onclick="acceso()">Entrar</button>
        <h3 id="login"></h3>
        <!--verificar PASSWORD-->
    </div>
    <div>
        <button id='newProfile'>Crear</button>
    </div>    
    </div>
    `);
  

//faltan las promesas