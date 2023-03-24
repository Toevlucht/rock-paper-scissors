let computerScore = 0;
let playerScore = 0;
let computerSelection = getComputerChoice();

//get the three button elements
const rockBtn = document.getElementById('rock');
const paperBtn = document.getElementById('paper');
const scissorsBtn = document.getElementById('scissors');

//get the result/score div
const result = document.getElementById('result');
const score = document.getElementById('score');
const newGame = document.getElementById('new-game');




function getComputerChoice() {
    const choiceArray = [
        "rock",
        "paper",
        "scissors",
    ];
    let randomChoice = Math.floor(Math.random()*choiceArray.length);
    let randomElement = choiceArray[randomChoice];
    return randomElement;
}


function playRound(playerChoice) {
    let computerSelection = getComputerChoice();
    let gameResult;

    if (playerChoice === computerSelection) {
        gameResult = `It's a tie! Both of you drew: ${playerChoice}.`;
    } else if (playerChoice === "rock" && computerSelection === "paper") {
        gameResult = `You lose! The computer's choice: ${computerSelection} beats your choice: ${playerChoice}.`
        computerScore += 1
    } else if (playerChoice === "paper" && computerSelection === "scissors") {
        gameResult = `You lose! The computer's choice: ${computerSelection} beats your choice: ${playerChoice}.`
        computerScore += 1 
    } else if (playerChoice === "scissors" && computerSelection === "rock") {
        gameResult = `You lose! The computer's choice: ${computerSelection} beats your choice: ${playerChoice}.`
        computerScore += 1
    } else if (playerChoice === "rock" && computerSelection === "scissors") {
        gameResult = `You win! Your choice: ${playerChoice} beats the computer's choice: ${computerSelection}.`
        playerScore += 1
    } else if (playerChoice === "scissors" && computerSelection === "paper") {
        gameResult = `You win! Your choice: ${playerChoice} beats the computer's choice: ${computerSelection}.`
        playerScore += 1
    } else if (playerChoice === "paper" && computerSelection === "rock") {
        gameResult = `You win! Your choice: ${playerChoice} beats the computer's choice: ${computerSelection}.`
        playerScore += 1
    }

    //display score
    result.textContent = gameResult;
    score.textContent = `Player: ${playerScore}, Computer: ${computerScore}`;

    if (playerScore === 5) {
        result.textContent = "Congratulations, you won the game!"
        disableButtons();
        resetGame();
    } else if (computerScore === 5) {
        result.textContent = "Oh no, you lost!"; 
        disableButtons();
        resetGame();      
    }
}


//disable the buttons once the game is finished
function disableButtons () {
    rockBtn.disabled = true;
    paperBtn.disabled = true;
    scissorsBtn.disabled = true;
}

function resetGame () {
    newGame.textContent = "Want to try again? Press the button!";
    let newButton = document.createElement('button');
    newButton.textContent = "Try again";
    newGame.appendChild(newButton);
    newButton.addEventListener ('click', () => {
        computerScore = 0;
        playerScore = 0;
        result.textContent = "";
        score.textContent = "";
        rockBtn.disabled = false;
        paperBtn.disabled = false;
        scissorsBtn.disabled = false;
        newGame.textContent = "";
        newButton.remove();
    })
}

//event listeners on the buttons
rockBtn.addEventListener('click', () => {
    playRound('rock');
});
paperBtn.addEventListener('click', () => {
    playRound('paper');
});
scissorsBtn.addEventListener('click', () => {
    playRound('scissors');
});
