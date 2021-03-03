class post {
    constructor (){
        //todos los atributos o valores almacenados en la Base de Datos (DB) 
        //los recupere u obtenga como timestamp 
        this.db = firebase.firestore()
        const setting = { timestampsInSnapshots : true}
        this.db.settings (settings)
    }
//Creando post
    createPost (uid, emailUser, title, description, imageLink){
        return this.db.collection("posts").add /*el add nos ayuda a generar el id de los post*/({
            uid : uid,  //identificador unico de usuario
            author : emailUser,
            title : title,
            description : description,
            //imageLink : imageLink
            fecha: firebase.firestore.FieldValue.serverTimestamp()
        })
        .then(refDoc => {
            console.log("Id post => ${refDoc.id}")
        })
        .catch(error =>{
            console.error("Error creating post => ${error}");
        })
    }

//Consultando todos los post de la comunidad
    consultAllPost () {
//Firestore va a la coleccion posts y con onSnapshots obtenemos los cambios en los documentos en tiempo real
        this.db.collection("posts").onSnapshot(querySnapshot => {
            $("#posts").empty() //Eliminamos los post de nuestro blog para ponerlos nuevamente
            if(querySnapshot.empty){
                $("#posts").append(this.getEmptyPostTemplate())
            }
            else{
                //Recorremos todos los post (documentos) para obtener el template de cada post con la información
                querySnapshot.forEach(post => {
                    let postHTML = this.getPostTemplate(
                        post.data().author,
                        post.data().title,
                        post.data().description,
                        //post.data().imageLink,
                        utility.getDate(post.data().date.toDate())
                    )
                    //mandndo a imprimir el template (data) obtenido
                    $("#posts").append(postHTML)
                });
            }
        })
    }

//Consultando solamente los post del usuario
consultUxPost (emailUser) {
    //Firestore va a la coleccion posts y con onSnapshots obtenemos los cambios en los documentos en tiempo real
            this.db.collection("posts")
            .where("author", "===", emailUser)
            .onSnapshot(querySnapshot => {
                $("#posts").empty() //Eliminamos los post de nuestro blog para ponerlos nuevamente
                if(querySnapshot.empty){
                    $("#posts").append(this.getEmptyPostTemplate())
                }
                else{
                    //Recorremos todos los post (documentos) para obtener el template de cada post con la información
                    querySnapshot.forEach(post => {
                        let postHTML = this.getPostTemplate(
                            post.data().author,
                            post.data().title,
                            post.data().description,
                            //post.data().imageLink,
                            utility.getDate(post.data().date.toDate())
                        )
                        //mandndo a imprimir el template (data) obtenido
                        $("#posts").append(postHTML)
                    });
                }
            })
        }
}