let numeroUm = 1
let stringUm = '1'
let numeroTrinta = 30
let stringTrinta = '30'
let numeroDez = 10
let stringDez = '10'

function compareFunction(variable1, variable2) {
    
    if(variable1 == variable2) {
        console.log(`As variáveis ${variable1} (${typeof variable1}) e ${variable2} (${typeof variable2}) tem o mesmo valor, mas tipos diferentes!`);
    } else {
        console.log(`As variáveis ${variable1} (${typeof variable1}) e ${variable2} (${typeof variable2}) não tem o mesmo valor!`);
    }
}

compareFunction(numeroUm, stringUm);
compareFunction(numeroTrinta, stringTrinta);
compareFunction(numeroDez, stringDez);