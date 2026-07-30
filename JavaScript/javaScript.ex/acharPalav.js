var frase='O rato comeu ele.'
var comeco=frase.indexOf('c');
var fim=frase.indexOf('u')

//Faz a variável ter o valor selecionado
var comeu=frase.slice(comeco, fim);

//Troca palavras selecionadas da frase inteira.
var novafrase=frase.replace('comeu', 'matou');

//Retira os espaços
var  nome='             Vini       '
var nomeTrim=nome.trim()

//Transforma frase wm Obj
var split=frase.split(' ')


console.log(frase)
console.log(comeu)
console.log(novafrase)
console.log(nomeTrim)
console.log(split)
