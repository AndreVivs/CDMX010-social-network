
export const wall = () =>`
    <div class='wall'>
        <div class='headerWall'>

            <div class="spaceForImagesWall" >
            <img src='assets/logo-home.png'>
            <img id='avatar' src='assets/avatar.png'>
            </div>
        </div>
        <div class='createPublication' id='history-container'>
            <form class='containerFlexCenter4' id='task-formPublication'>
                <div class='card'>    
                    <div id='from-groupInput'>
                        <input type='text' id='task-InputNewPublication' placeholder='¿Que lugar visitaste?'></input>
                    </div>
                    <div class='form-group'>
                        <textarea class="toPublicated" id='task-contentPublication' placeholder='Cuentanos del lugar...'></textarea>
                    </div>
                    <div class='buttons-group' id='buttons-group'> 
                    <button type='submit' class='buttonNewPublication' id='save' >Publicar</button>
                    </div> 
                </div>
            </form>
        </div>
        <div class='createPublication2' id='tasks-container'></div>
    `;
