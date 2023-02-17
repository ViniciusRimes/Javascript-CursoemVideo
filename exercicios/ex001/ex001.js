function carregar()
{
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var hora = new Date().getHours()
    msg.innerText = `Agora são ${hora} horas.`

    if(hora >= 0 && hora < 12)
    {
        img.src = "dia.jpg"
    }else if(hora >= 12 && hora < 18)
    {
        img.src = "tarde.jpg"
    }else{
        img.src = "noite.jpg"
    }

}
