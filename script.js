// begin with a function that will randomly return 'Rock', paper or scissors
function getComputerChoice () {
    const choiceArray = [
        "Rock",
        "Paper",
        "Scissors",
    ];
    let randomChoice = Math.floor(Math.random()*choiceArray.length);
    let randomElement = choiceArray[randomChoice];
    return randomElement;
}



function getPlayerChoice() {
    const choice = prompt("Rock, paper or scissors?");
    return choice.charAt(0).toUpperCase() + choice.slice(1).toLowerCase();
}


function playRound(playerSelection, computerSelection) {

    if (playerSelection === computerSelection) {
        gameResult = "It's a draw!"
        return gameResult;
    } else if (playerSelection === "Rock" && computerSelection === "Paper") {
        gameResult = `You lose! ${computerSelection} beats ${playerSelection}`
        return gameResult;
    } else if (playerSelection === "Paper" && computerSelection === "Scissors") {
        gameResult = `You lose! ${computerSelection} beats ${playerSelection}`
        return gameResult 
    } else if (playerSelection === "Scissors" && computerSelection === "Rock") {
        gameResult = `You lose! ${computerSelection} beats ${playerSelection}`
        return gameResult
    } else if (playerSelection === "Rock" && computerSelection === "Scissors") {
        gameResult = `You win! ${playerSelection} beats ${computerSelection}`
        return gameResult
    } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
        gameResult = `You win! ${playerSelection} beats ${computerSelection}`
        return gameResult
    } else if (playerSelection === "Paper" && computerSelection === "Rock") {
        gameResult = `You win! ${playerSelection} beats ${computerSelection}`
        return gameResult
    } else (playerSelection != "Paper"|"Rock"|"Scissors"); {
        gameResult = "Nee sukkel, je moet 'paper', 'scissors' of 'rock' invullen."
        return gameResult    
    }
}

const playerSelection = getPlayerChoice();
const computerSelection = getComputerChoice();
console.log(computerSelection)
console.log(playRound(playerSelection, computerSelection));

// function game() {
//     for (let i = 0; i < 5; i++) {
//         if (i = 0 && playRound() != "") {
//             (i++)
//             console.log(gameResult)
//             console.log(i)
//         } 
      
//     }
// }
    
        
        // if i > 0, prompt getPlayerChoice
        // after each prompt, run playRound
        

// console.log(game())
//alles vanaf punt 5;
//getplayerchoice moet foutmelding bij foute prompt krijgen
