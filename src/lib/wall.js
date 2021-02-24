//This is the wall
export const wall =`
    <div class='wall'>
        <div class='head'>
            <img src='assets/logo-home.png'>
            <img src='assets/avatar.png'>
        </div>
        <div class='createPublication'>
            <form class='flexCenter4'>
                <input type='text' id='newPublication' placeholder='Escribe...'></input>
                <button class='hold'>Publicar</button>
            </form>
        </div>
        <div class='publication'>
            <form class='flexCenter5'>
                <button id='avatarPublication'></button>
                <textarea class="alreadyPublicated"  rows="4" cols="32"></textarea>
                <button id='enviaja'></button>
            </form>
        </div>
        <div class='publication'>
            <form class='flexCenter5'>
                <button id='avatarPublication'></button>
                <textarea class="alreadyPublicated"  rows="4" cols="32"></textarea>
                <button id='desenviaja'></button>
            </form>
            
        </div>    
    </div>
    `;

//faltan las promesas