let vetor = [2,5,4,6,4,5]

function Multi(vetor, multiplicador){
    let resultado1 = []
    vetor.forEach(elemento => {
        resultado1.push(elemento * multiplicador)
    })

    return resultado1
}

function Maiorque5(vetor,multiplicador){
    let resultado2 = []
    if(multiplicador < 5) return
    vetor.forEach(nuvet => {
        resultado2.push(nuvet * multiplicador)
    }) 

    return resultado2

}
console.log(Multi(vetor,2))
console.log(Maiorque5(vetor,5))