var lista=[1,2,3,4,5];

//Onde começa, quantos deleta, qual adiciona.
lista.splice(2, 0, 999);
lista.splice(4, 1);

console.log(lista)


//Transforma array em string.
var frase=['oi', 'tudo', 'bem']
var frasenova=frase.join(' ')
console.log(frasenova)