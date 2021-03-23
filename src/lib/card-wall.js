
export const cardWall = (post, docId) =>{
    return`
        <div class='divCard'>
            <div class='avatarsCard'>
                <button id='avatarPublication'></button>
            </div>
            <div class='textCard'>
                <h3 class='h3Publication'>${post.title}</h3>
                <p>${post.description}</p>
            </div>
            <div class='enviajaCard'>
                <button id='desenviaja'></button> 
            </div>
            <div class='buttonCard' id = 'buttonCard'>
                <button  class='buttonNewPublication2 editPublication'>Editar</button>
                <button class='buttonNewPublication2 deletePublication' docId='${docId}'>Borrar</button>
            </div>
        </div>`};


//en la linea 18 dice "date" en vez de ID pq en algun punto nos equivocamos poniendola en firebase. 