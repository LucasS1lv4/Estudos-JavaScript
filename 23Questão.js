/*Crie três vetores, chamados vetorInteiro, vetorString e vetorDouble. Cada um destes vetores deverá conter
quatro valores, sendo o primeiro com valores inteiros, o segundo com strings e o terceiro com valores decimais.
Declarados os vetores, utilize a função de união concat() de duas maneiras diferentes para unir os vetores, e
mostre o resultado no console. Todos os elementos do vetor resultado deverão aparecer no console.
*/

function TipoVet(vetorInteiro, vetorString, vetorDouble){

return `${vetorInteiro.concat(vetorString, vetorDouble)}`

}

console.log(TipoVet([1,2,3,4],['s5', 's6', 's7'],[4.5,4.6,4.7]))