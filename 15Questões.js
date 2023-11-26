/*Crie um programa que imprima 11 vezes a frase " Hello World!" utilizando uma estrutura de repetição while*/

function conthello(cont){
    do{
        cont++
        console.log(`${cont}.Hello Word`)
    }while(cont<11)
}

conthello(0)