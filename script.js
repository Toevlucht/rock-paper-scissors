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
        gameResult = `It's a tie! Both of you drew: ${playerSelection}.`;
        return gameResult;
    } else if (playerSelection === "Rock" && computerSelection === "Paper") {
        gameResult = `You lose! The computer's choice: ${computerSelection} beats your choice: ${playerSelection}.`
        computerScore += 1
        return gameResult;
    } else if (playerSelection === "Paper" && computerSelection === "Scissors") {
        gameResult = `You lose! The computer's choice: ${computerSelection} beats your choice: ${playerSelection}.`
        computerScore += 1
        return gameResult 
    } else if (playerSelection === "Scissors" && computerSelection === "Rock") {
        gameResult = `You lose! The computer's choice: ${computerSelection} beats your choice: ${playerSelection}.`
        computerScore += 1
        return gameResult
    } else if (playerSelection === "Rock" && computerSelection === "Scissors") {
        gameResult = `You win! Your choice: ${playerSelection} beats the computer's choice: ${computerSelection}.`
        playerScore += 1
        return gameResult
    } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
        gameResult = `You win! Your choice: ${playerSelection} beats the computer's choice: ${computerSelection}.`
        playerScore += 1
        return gameResult
    } else if (playerSelection === "Paper" && computerSelection === "Rock") {
        gameResult = `You win! Your choice: ${playerSelection} beats the computer's choice: ${computerSelection}.`
        playerScore += 1
        return gameResult
    } else if (playerSelection === "Tijntje") {
        gameResult = "Noooh sgggatje van me toch. Speciaal voor jou +10000 punten <333"
        playerScore += 10000;
        return gameResult;
    } else (playerSelection != "Paper"|"Rock"|"Scissors"); {
        gameResult = "Nee sgettebout, je moet 'paper', 'scissors' of 'rock' invullen. +100 punten voor de computer ;-)."
        computerScore += 100;
        return gameResult    
    }
}

let playerSelection = getPlayerChoice();
let computerSelection = getComputerChoice();

function game() {
    // let playerSelection = getPlayerChoice();
    // let computerSelection = getComputerChoice();
    
    // console.log((computerSelection), (oneRound));

    for (let i = 0; i < 5; i++) {
    //    first, let a new PlayerChoice value appear after each round:
        if (roundNumber > 0) {
            playerSelection = getPlayerChoice();
            computerSelection = getComputerChoice();
        }
        playRound(playerSelection, computerSelection)

        switch (roundNumber) {
            case 0:
                roundNumber++;
                console.log(`${gameResult} Your current score is: ${playerScore}, whereas the computer's score is ${computerScore}.`);
                // const playerSelection = 0
                break;
            case 1:
                roundNumber++;
                console.log(`${gameResult} Your current score is: ${playerScore}, whereas the computer's score is ${computerScore}.`);
                break;
            case 2:
                roundNumber++;
                console.log(`${gameResult} Your current score is: ${playerScore}, whereas the computer's score is ${computerScore}.`);
                break;
            case 3:
                roundNumber++;
                console.log(`${gameResult} Your current score is: ${playerScore}, whereas the computer's score is ${computerScore}.`);
                break;
            case 4:
                roundNumber++;
                console.log(`${gameResult} Your current score is: ${playerScore}, whereas the computer's score is ${computerScore}.`);
                if (playerScore > computerScore) {
                    console.log(`Hurray you won! Your final scores is: ${playerScore}  against the computer's final score: ${computerScore}. Well done!`);
                } else {
                    console.log(`Oh no, you lost! Your final scores is: ${playerScore}  against the computer's final score: ${computerScore}. Well done!`);
                }
                break;
        }
    } 
}


console.log(game())

        // if (getPlayerChoice () === "") {
        //     playerSelection;
        // }

//         switch (roundNumber) {
//             case 0: 
//                 playRound(playerSelection, computerSelection);
//                 roundNumber++;
//                 console.log(gameResult, playerScore, computerScore, roundNumber, one)
//                 break;
//             case 1:
//                 playRound(playerSelection, computerSelection);
//                 roundNumber++;
//                 console.log(gameResult, playerScore, computerScore, roundNumber, two)
//                 break;
//             case 2:
//                 playRound(playerSelection, computerSelection);
//                 roundNumber++;
//                 console.log(gameResult, playerScore, computerScore, roundNumber, three)
//                 break;
//             case 3:
//                 playRound(playerSelection, computerSelection);
//                 roundNumber++;
//                 console.log(gameResult, playerScore, computerScore, roundNumber, one)
//                 break;
//             case 4:
//                 playRound(playerSelection, computerSelection);
//                 roundNumber++;
//                 console.log(gameResult, playerScore, computerScore, roundNumber, three)
//                 break;    
        
//         }

//         computerSelection;
//         playRound(playerSelection, computerSelection)
//     }   
// }

