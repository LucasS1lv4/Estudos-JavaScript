/*) Ler um vetor de números inteiros e imprimir quantos são pares e quantos são ímpares.
*/

function VetorNum(Vetores){

    let i = 0
    let quantpar = 0
    let quantimp = 0

    for(i; i< Vetores.length; i++){
        if(Vetores[i] % 2 == 0){
            quantpar++
        }else{

            quantimp++
        }
    }

    console.log(`Numeros pares: ${quantpar}; impares: ${quantimp}`)
}

let vet = [1,2,3,4,5,6,7,8,9,10]

VetorNum(vet)