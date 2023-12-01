/* Escreva um algoritmo que percorre um vetor de inteiros e defina o maior e menor valor dentro do vetor.*/

function INTC(vetor){
let maior = 0
for(let i = 0; i <= vetor.length; i++){

    if(maior <= vetor[i]){
        
    maior= vetor[i]
    }
}
console.log(`O maior numero deste array é: ${maior}`)
}

INTC([24,17,20,23,27,22,25,11,13,15])