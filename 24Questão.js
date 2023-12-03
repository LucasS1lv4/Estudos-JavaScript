/*Construa uma função que receberá duas Strings de tamanhos variados e que retornará True ou False caso
todos os caracteres (independentemente de ser maiúsculo ou minúsculo) estejam contidos em ambas palavras.
*/

function leia(text1, text2){
    if(text1 == text2 || text1 == text2.toUpperCase() || text1 == text2.toLowerCase()){
        return 'True'
    }else{

        return 'False'
    }
}

console.log(leia('TESTE', 'teste'))