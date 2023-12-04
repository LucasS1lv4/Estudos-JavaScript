/* Faça uma função que receba como parâmetro um vetor de notas e mostre os conceitos de cada uma de
modo que de 0,0 a 4,9 seja atribuído o conceito D, de 5,0 a 6,9 seja atribuído o conceito C, de 7,0 a 8,9 o
conceito B e de 9,0 a 10,0 o conceito A
 */

function Notas (vet){
   
vet.forEach(elementos =>{ if(elementos >= 0.0 && elementos <= 4.9){
console.log('D')
}if(elementos >= 5.0 && elementos <= 6.9){
    console.log('c')
}if(elementos >= 7.0 && elementos <= 8.9){
    console.log('b')
}if(elementos >= 9.0 && elementos <= 10.0){
    console.log('a')}
})

}
let vet = [10,5.0,4.9,1.5]
Notas (vet)