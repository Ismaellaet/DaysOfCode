const tecnologies = "Quais são as tecnologias que você quer se especializar ou conhecer?";
const moreTecnologies = "Tem mais alguma tecnologia que você gostaria de aprender? Responda 1 para SIM.";

const name = prompt("Qual o seu nome?");

const frontOrBack = prompt(`Olá ${name}, você quer serguir para área de Front-End ou Back-End`);

if(frontOrBack == "Front-End") {
    prompt("Você quer aprender React ou Vue?");
} else if(frontOrBack == "Back-End") {
    prompt("Você quer aprender C# ou Java?")
}

prompt(`Que legal ${name}, você quer se especializar no ${frontOrBack} ou quer se tornar Fullstack?`);

prompt(tecnologies);

let answer = prompt(moreTecnologies);
while(answer == 1) {
    prompt(tecnologies);
    answer = prompt(moreTecnologies);
}
