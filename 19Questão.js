/*Utilizando a estrutura de repetição for, faça uma função que percorra um vetor e conte quantos números
deste vetor estão no intervalo [10,20] (repare que o intervalo é fechado, ou seja, inclui o 10 e o 20) e quantos
deles estão fora do intervalo, escrevendo estas informações.*/
function Intervalo(vetor){
    let contInter = 0
    let contfora = 0

for(let i = 0; i < vetor.length ;i++){
 if(vetor[i] > 10 && vetor[i] < 20){
     contInter++
        
    }else{

        contfora++
        
    }
      
}

console.log(`${contfora} Estão fora do intervalo`)
console.log(`${contInter} Estão dentro do intervalo`)

}


let vetorial = [4,5,2,6,10,15,19,14,20]
Intervalo(vetorial)