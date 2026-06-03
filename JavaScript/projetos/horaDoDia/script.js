function carregar(){
    var msg=window.document.getElementById('msg')
    var img=window.document.getElementById('imagem')
    var data=new Date()
    var hora=data.getHours()
    msg.innerHTML=`Agora são ${hora} horas!`
    if (hora>=4 && hora<=12) {
        window.document.body.style.background='#ccee3494'
        img.src='manha.png'
    } else if (hora<=19) {
        img.src='tarde.png'
        window.document.body.style.background='#FFD700'
    } else {
        img.src='noite.png'
        window.document.body.style.background='#363636'
    }
}