/* Escrever um algoritmo que percorre um vetor de inteiros, conta quantos números negativos há nesse vetor
e imprime a quantidade no console
*/

function ContNEgativos(vetor){

let negativos = 0
for(let i = 0; i <= vetor.length; i++){
    if(vetor[i] < 0){
        negativos++
    }
}
console.log(`Existem neste array ${negativos} numero(s) negativo(s)`)

}

ContNEgativos([-1,-2,-3,-4,-5,0,5,1])