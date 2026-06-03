var list=[] //Lista que guarda os valores apresentados em pronto().
//Função que adiciona um valor á lista e ao select.
function lista(){
    let n = Number(document.getElementById('txtnum').value)
    if (n<=0 || n>=100|| list.includes(n)){
        window.alert('NÚMERO NÃO ADICIONADO')
    } else {
        let opc=document.createElement('option')
        opc.text=`Valor ${n} adicionado.`
        opc.value=`${n}`
        document.getElementById('listan').appendChild(opc)
        list.push(n)
        pronto()
    }
    document.getElementById('txtnum').value=''
    document.getElementById('txtnum').focus
}
//Função quando um número é enviado.
function pronto(){
    let soma = 0
    for (pos in list){
        soma+=list[pos]
    }
    if (document.getElementById('listan').length==0){
        window.alert('A CAIXA DE NÚMEROS ESTÁ VAZIA.')
    } else {
    document.getElementById('res').innerHTML=`Temos ao todo ${list.length} números.<br>
    O maior número informado foi ${Math.max(...list)}.<br>
    O menor foi ${Math.min(...list)}.<br>
    Somando todos os valores temos ${soma}.<br>
    A média dos valores é ${soma/list.length}.`
    }
}

function zerar(){
    document.getElementById('listan').innerHTML=''
    document.getElementById('res').innerHTML=''
    list=[]
}