/*Uma das vantagens da programação é a automatização de tarefas que não gostamos de realizar. Dito isto,
elabore uma função cujo objetivo é resolver a fórmula de Bhaskara. Para isso, sua função deve receber três
parâmetros, “ax2”, “bx” e “c”, de tal modo que na equação: 3x² - 5x + 12 os valores seriam respectivamente: 3,
-5, 12. Como retorno deve ser passado um vetor que tem 2 valores um para cada possível resultado, mesmo
que os resultados sejam iguais. Caso o delta seja negativo, retorne, ao invés do vetor, um string com a frase:
“Delta é negativo”*/

function bhaskara(a,b,c){

    let resultado1 = (-b + Math.sqrt(b)-4*a*c)/2*a
    let resultado2 = (-b - Math.sqrt(b)-4*a*c)/2*a

    console.log(`o resultado da equação é x1=${resultado1.toFixed(2)} e x2=${resultado2.toFixed(2)}`)
}

bhaskara(50,10,11)