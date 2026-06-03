function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano= document.getElementById('txtano')
    var res= document.getElementById('res')
    var img=document.createElement('img')
    img.setAttribute('id', 'foto')
    if (Number(fano.value)==0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Ano de nascimento inválido!')
    } else {
        var fsex=document.getElementsByName('radsex')
        var idade=ano-Number(fano.value)
        var genero=''
        if (fsex[0].checked){
            genero='Homem'
            if(idade>0 && idade<12){
                img.setAttribute('src', 'criancam.png')
            } else if(idade<18){
                img.setAttribute('src', 'jovemm.png')
            } else if(idade<45){
                img.setAttribute('src', 'adulto.png')
            } else {
                img.setAttribute('src', 'idoso.png')
            }
        } else {
            genero='Mulher'
            if(idade>0 && idade<12){
                img.setAttribute('src', 'criancaf.png')
            } else if(idade<18){
                img.setAttribute('src', 'jovemf.png')
            } else if(idade<45){
                img.setAttribute('src', 'adulta.png')
            } else {
                img.setAttribute('src', 'idosa.png')
            }
        }
        res.innerHTML=`Identificamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
} 