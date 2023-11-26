/* Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
retornará o valor da aplicação sob o regime de juros compostos.
*/
function MontanteFsimples ( c, i, t){ //função para o cálculo dos juros simples

    let juros_simples = c * i * t

console.log('Juros simples: ' + juros_simples)
}


const MontanteFcomposto = ( c, i, t) =>{ // Função arrow para o calculo dos juros compostos

    let juros_compostos = c * (1 + i)**t

console.log('Juros Compostos: ' + juros_compostos)
}


MontanteFsimples ( 50 ,10, 2)
MontanteFcomposto ( 50 ,10, 2)