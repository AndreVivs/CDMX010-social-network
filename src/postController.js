$("#btnRegisterPost").click(()=>{
    const post = new post()
    //const user = firebase.auth().currentUser
//Validando si el usuario esta autenticado
    if (user === null){
        alert("to create the post you must be authenticated" , 4000)
        return
    }

    const title = $ ("#titleNewPost").val()
    const description = $ ("#descriptionNewPost").val()
    //const imageLink = sessionStorage.getItem("imgNewPost") === "null"
      ? null
      : sessionStorage.getItem("imgNewPost")

    post
        .createPost(
            user.uid,
            user.email,
            title,
            description,
            //imageLink
        )
        .then (resp => {
            Materialize.toast("Post created successfully" , 4000)
            %(".modal").modal("close")
        })
        .catch(err => {
            Materialize.toast("Error => ${err}" , 4000)
        })
})