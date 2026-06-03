function tabuada(){
    if (document.getElementById('txtn').value.length==0){
        window.alert('NÚMERO INVÁLIDO!')
    } else {
        document.getElementById('seletabu').innerHTML=``;
        var n = Number(document.getElementById('txtn').value)
        for (let c=1; c<=10; c++){
            let opc=document.createElement('option')
            opc.text=`${n}x${c}=${n*c}`
            opc.value=`tab${c}`
            document.getElementById('seletabu').appendChild(opc)
        }
    }
}