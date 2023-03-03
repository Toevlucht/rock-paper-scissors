// begin with a function that will randomly return 'Rock', paper or scissors
function getComputerChoice() {
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

let computerScore = 0;
let playerScore = 0;
let roundNumber = 0;
let gameResult = "";

function playRound(playerSelection, computerSelection) {
    

    if (playerSelection === computerSelection) {
        gameResult = "It's a draw!"
        return gameResult;
    } else if (playerSelection === "Rock" && computerSelection === "Paper") {
        gameResult = `You lose! The computer's choice: ${computerSelection} beats your choice: ${playerSelection}`
        computerScore += 1
        return gameResult;
    } else if (playerSelection === "Paper" && computerSelection === "Scissors") {
        gameResult = `You lose! The computer's choice: ${computerSelection} beats your choice: ${playerSelection}`
        computerScore += 1
        return gameResult 
    } else if (playerSelection === "Scissors" && computerSelection === "Rock") {
        gameResult = `You lose! The computer's choice: ${computerSelection} beats your choice: ${playerSelection}`
        computerScore += 1
        return gameResult
    } else if (playerSelection === "Rock" && computerSelection === "Scissors") {
        gameResult = `You win! Your choice: ${playerSelection} beats the computer's choice: ${computerSelection}`
        playerScore += 1
        return gameResult
    } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
        gameResult = `You win! Your choice: ${playerSelection} beats the computer's choice: ${computerSelection}`
        playerScore += 1
        return gameResult
    } else if (playerSelection === "Paper" && computerSelection === "Rock") {
        gameResult = `You win! Your choice: ${playerSelection} beats the computer's choice: ${computerSelection}`
        playerScore += 1
        return gameResult
    } else (playerSelection != "Paper"|"Rock"|"Scissors"); {
        gameResult = "Nee sukkel, je moet 'paper', 'scissors' of 'rock' invullen."
        return gameResult    
    }
}
const playerSelection = getPlayerChoice();
const computerSelection = getComputerChoice();
// // console.log(playRound())


function game() {
    // let playerSelection = getPlayerChoice();
    // let computerSelection = getComputerChoice();
    
    // console.log((computerSelection), (oneRound));

    for (let i = 0; i < 5; i++) {
        if (roundNumber == 0) {
            playerSelection;
            roundNumber++;
        } else {
            playerSelection;
            roundNumber++;
        }
        computerSelection;
        playRound(playerSelection, computerSelection);
        console.log(gameResult, playerScore, computerScore, roundNumber)
        }
    
}

console.log(game())

// function game() {
//     for (let i = 0; i < 5; i++) {
//         if (i = 0 && playRound() != "") {
//             (i++)
//             console.log(gameResult)
//             console.log(i)
//         } 
      
//     }
// }



// console.log(computerSelection);
// console.log(playRound(playerSelection, computerSelection));
        
//         if i > 0, prompt getPlayerChoice
//         after each prompt, run playRound
        

// console.log(game())
// alles vanaf punt 5;
// getplayerchoice moet foutmelding bij foute prompt krijgen
