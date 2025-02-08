function carregar(){
    var msge = document.getElementById('msg')
    var imag = document.getElementById('foto')
    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()
    var sec = data.getSeconds()

    msge.innerHTML = `agora são ${hora}:${min}:${sec}`
    

    if (hora >= 0 && hora < 12){
        imag.src = "imagem/manha.jpg"
        document.body.style.background = '#00FFFF'

    }
    
    else if (hora >= 12 && hora <= 18){
        imag.src = "imagem/tarde.jpg"
        document.body.style.background = '#CF7A61'
    }
    else{
        imag.src = "imagem/noite.jpg"
        document.body.style.background = '#312233'
        document.body.style.color= '#FFFFFF'
    }
}