function exibir(num){
    console.log(`O resultado é ${num}`)
}
function soma(a,b,callback){
    var res=a+b;
    callback(res)
}
function mult(a,b,callback){
    var res=a*b;
    callback(res)
}
soma(4,3,exibir)
mult(5,6,exibir)