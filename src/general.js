// Consultando todos los post de la comunidad
$("#btnAllPost").click(() => {
  $("titlePost").text("community posts")
    const post = new post()
    post.consultAllPost ()
})

//Consultando solamente mis post
$("#btnMyPost").click(() => {
    const user = firebase.auth().currentUser
    if (user) {
        const post = new post()
        post.consultUxPost(user.email)
        $("titlePost").text("My posts")
    }  
})