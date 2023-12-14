/*Desenvolva uma função que receba dois parâmetros, um é a quantidade de horas trabalhadas por um funcionário num mês, e o quanto ele recebe por hora. O retorno da função deve ser uma string "Salário igual a R$ x" em que x é o resultado de quanto o funcionário ganhou no mês*/

function HorasTrabalhadas(Horas, quantHrs){
let resultado = (Horas * quantHrs).toFixed(2).replace(".",",")
return `Salário igual a R$ ${resultado}`
}

console.log(HorasTrabalhadas(2, 85.75))