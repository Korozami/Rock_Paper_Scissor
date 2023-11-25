let win = 0;
let lose = 0;
let tie = 0;

//gets random comp choice
function getComputerChoice () {
    const choices = ["rock", "paper", "scissor"];
    let random = choices[Math.floor(Math.random() * 3)];
    return random;
}

//gets player choice from button
function playRound (option) {
    const choices = ["rock", "paper", "scissor"];
    let playerSelection = choices[option]
    let computerSelection = getComputerChoice();
    if (playerSelection === "rock") {
        if (computerSelection === "rock") {
            tie++;
        } else if (computerSelection === "paper") {
            lose++;
        } else {
            win++;
        }
    } else if (playerSelection === "scissor") {
        if (computerSelection === "scissor") {
            tie++;
        } else if (computerSelection === "rock") {
            lose++;
        } else {
            win++;
        }
    } else {
        if (computerSelection === "paper") {
            tie++;
        } else if (computerSelection === "scissor") {
            lose++;
        } else {
            win++;
        }
    }

    //find the div element and replace it with results
    const container = document.querySelector('.content')
    const content = document.createElement('div');
    content.classList.add('content');
    content.textContent = `Win: ${win} Lost: ${lose} Tie: ${tie}`
    container.replaceWith(content);

    if (win === 5 || lose === 5) {
        if (win === 5) {
            const final = document.querySelector('.content')
            const winner = document.createElement('div');
            winner.classList.add('result');
            winner.textContent = `You are the Winner!!!!! With the final score of: Win: ${win} Lost: ${lose} Tie: ${tie}`;
            final.appendChild(winner);
        } else {
            const final = document.querySelector('.content')
            const winner = document.createElement('div');
            winner.classList.add('result');
            winner.textContent = `You are the Loser x(!!!!! With the final score of: Win: ${win} Lost: ${lose} Tie: ${tie}`
            final.appendChild(winner)
        }

        win = 0;
        lose = 0;
        tie = 0;
    }

}
