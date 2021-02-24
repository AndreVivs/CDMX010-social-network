//This is the profile
export const profile = () => {
    let html4 =`
    <div class='profile'>
        <div>
            <img src='src/assets/logo-jalo.png'>
            <img src='src/assets/logo-jalo.png'>
        </div>
        <div>
            <form>
                <input type='text' placeholder='Escribe...'></input>
                <button id='hold'>Publicar</button>
            </form>
        </div>
        <div>
            <form>
                <section id='theText'></section>
            </form>
            <img src='src/assets/me-enviaja.png'>
        </div>  
        <div>
            <form>
                <section id='theText'></section>
            </form>
            <img src='src/assets/me-enviaja.png'>
        </div>    
    </div>
    `
    return html4
} 

//faltan las promesas and alerts