const target = getRandomIntInclusive(0, 10);
let attempt = 2;

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

while(attempt >= 0) {
    const answer = prompt("Qual o seu chute entre 0 a 10?");
    const wrongAnswer = alert(`Que pena, você tem mais ${attempt} tentativas!`); 

    if(answer == target) {
        alert("Parabéns você acertou!!");
        break;
    } else if(attempt == 0){
        wrongAnswer;
        alert(`A resposta era ${target}`)
    } else {
        wrongAnswer;
    }

    attempt--;
}

