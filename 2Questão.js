/*) Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais. Escaleno: Todos os lados são diferentes.
Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto
ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um
triângulo).*/

function TiposTriangulos(t1, t2, t3){
if(t1 == t2 && t2 == t3 && t1 == t3){
    
    console.log('O Triangulo é Equilátero')
} else if(t1 == t2 || t2 == t3 || t3 == t1){

    console.log('O Triangulo é Isósceles') 
}else {

    console.log('O Triangulo é Escaleno') 
}   
    }

    TiposTriangulos(4, 2, 3)