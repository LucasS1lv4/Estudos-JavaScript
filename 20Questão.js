/* Escreva um algoritmo que percorre um vetor de inteiros e defina o maior e menor valor dentro do vetor.*/

function INTC(vetor){
    let maior
    let menor
for(let i = 0; i <= vetor.length; i++){
    if(maior == undefined && menor== undefined){
        maior = vetor[i] 
        menor= vetor[i]
    } else{
    if(vetor[i] > maior ){
        
    maior= vetor[i]

    }if(vetor[i] < menor){
        menor= vetor[i]
    }
}
}   
console.log(`O maior numero deste array é: ${maior}`)
console.log(`O menor numero deste array é: ${menor}`)
}

INTC([1,24,17,20,23,27,22,25,11,13,15])