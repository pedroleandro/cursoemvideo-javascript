function carregar(){
    var message = window.document.getElementById('message')
    var photo = window.document.getElementById('photo')

    var data = new Date()
    var hora = data.getHours()

    //var hora = 21
    message.innerHTML = `Agora são ${hora} horas!`

    if(hora >= 0 && hora < 12){
        //BOM DIA
        photo.src = "../public/images/fotomanha.png"
        document.body.style.background = "#e2cd9f"
    }else if(hora >= 12 && hora < 18){
        //BOA TARDE
        photo.src = "../public/images/fototarde.png"
        document.body.style.background = "#b9846f"
    }else{
        //BOA NOITE
        photo.src = "../public/images/fotonoite.png"
        document.body.style.background = "#515154"
    }
}

