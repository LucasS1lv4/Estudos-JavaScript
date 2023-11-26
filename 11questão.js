function contcedulas(valor){

    let cont100 = 0
    let cont50 = 0
    let cont10 = 0
    let cont5 = 0
    let cont1= 0
    
    while(valor != 0){
        
        if(valor >=100){
            valor -= 100
            cont100++   
        }else if(valor >=50){
            valor -= 50
            cont50++  
        } else if(valor >=10){
            valor -= 10
            cont10++   
        }else if(valor >=5){
            valor -= 5
            cont5++   
        }else if(valor >=1){
            valor -= 1
            cont1++   
        }

    }
        if(cont100 > 0){
            console.log(`${cont100} nota(s) de 100`)
        }if(cont50 > 0){
            console.log(`${cont50} nota(s) de 50`)
        }if(cont10 > 0){
            console.log(`${cont10} nota(s) de 10`)
        }if(cont5 > 0){
            console.log(`${cont5} nota(s) de 5`)
        }if(cont1 > 0){
            console.log(`${cont1} nota(s) de 1`)
        }
}

contcedulas(18)