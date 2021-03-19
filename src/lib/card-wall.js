

export const cardWall = (docRef) =>{
    return`
        <div class='divCard'>
            <div class='avatarsCard'>
                <button id='avatarPublication'></button>
            </div>
            <div class='textCard'>
                <h3 class='h3Publication'>${docRef.title}</h3>
                <p>${docRef.description}</p>
            </div>
            <div class='enviajaCard'>
                <button id='desenviaja'></button> 
            </div>
            <div class='buttonCard' id = 'buttonCard'>
                <button  class='buttonNewPublication2 editPublication'>Editar</button>
                <button class='buttonNewPublication2 deletePublication' onclick="eliminar()" id="deletePublication${docRef.date}" >Borrar</button>
            </div>
        </div>`};

