/*Construir um algoritmo que calcule a média aritmética dos valores de um vetor de inteiros.
*/

function MediaVetor(vetor){
    let soma = 0
   
    for(let i = 0; i < vetor.length; i++){
            
        soma += vetor[i]
      
    }
    return soma/vetor.length
   
}

console.log(MediaVetor([25,5,6,4,8,9,1,4]))