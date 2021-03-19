export const cardWall = (post) => `
<div class='divCard'>
    <div class='avatarsCard'>
        <button id='avatarPublication'></button>
    </div>
    <div class='textCard'>
        <h3 class='h3Publication'>${post.title}</h3>
        <p>${post.description}</p>
    </div>
    <div class='enviajaCard'>
        <button class='desenviaja' data-id = '${post.id}'></button>
        <span id= 'desenviaja'data-id = '${post.id}'> ${post.totalLike} </span>
    </div>
    <div class='buttonCard'>
        <button class='buttonNewPublication2' data-id = '${post.id}'>Editar</button>
        <button class='buttonNewPublication2' data-id = '${post.id}'>Borrar</button>
    </div>
</div>
`;
