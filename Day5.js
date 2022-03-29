let question = "Deseja adicionar uma comida na sua lista de compras? Digite 1 para SIM ou 2 para NÃO";
let fruits = [];
let frozen = [];
let candy = [];

let answer = prompt(question)

while(answer == 1) {
    let food = prompt("Qual comida deseja inserir?");
    let category = prompt("Em qual categoria essa comida se encaixa? Frutas, congelados ou doces?");

    switch(category) {
        case 'frutas':
            fruits.push(food);
            answer = prompt(question);
            break;
        case 'congelados':
            frozen.push(food);
            answer = prompt(question);
            break;
        case 'doces':
            candy.push(food);
            answer = prompt(question);
            break;
    }    
}

if(answer == 2) {
    alert(`Lista de compras:
                            Frutas: ${fruits}
                            Congelados: ${frozen}
                            Doces: ${candy}
    `)
}