alert("Before clicking 'OK', in Chrome Press F12, and open 'Sources' in the DevTools. If you don't see 'Console' as a tab in the bottom of Devtools, press Esc");

//computer makes a random choice on the basis of a three-string array
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

//player is prompted to enter a string, which will return: "Lorem"
function getPlayerChoice() {
    const choice = prompt("Rock, paper or scissors?");
    return choice.charAt(0).toUpperCase() + choice.slice(1).toLowerCase();
}

//number of rounds is prompted, with safeguard
function askNumber() {
    
    let roundChoice;

    do {
        roundChoice = parseInt(prompt(`please enter the number of round you want to play, between ${minRound} and ${maxRound}`));
    } while ((roundChoice < minRound || roundChoice > maxRound) && roundChoice);
    
    return roundChoice; 
}

let minRound = 1;
let maxRound = 10;
let computerScore = 0;
let playerScore = 0;
let roundNumber = askNumber();
const roundInitial = roundNumber;
let gameResult = "";

//all possible outcomes for playing 1 round
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
    } else (playerSelection != "Paper"|"Rock"|"Scissors"); {
        gameResult = "O nee! Je moet 'paper', 'scissors' of 'rock' invullen. +2 punten voor de computer ;-)."
        computerScore += 2;
        return gameResult    
    }
}

let playerSelection = getPlayerChoice();
let computerSelection = getComputerChoice();

//game() initializes for loop with a max of roundInitial - 1, if statement is skipped in 1st round, but prompted every other round;
function game() {

    for (let i = 0; i <= (roundInitial - 1); i++) {
    
        if (roundNumber < roundInitial) {
            playerSelection = getPlayerChoice();
            computerSelection = getComputerChoice();
        }
        playRound(playerSelection, computerSelection)

        switch (true) {
            case roundNumber < 2:
                console.log(`${gameResult} Your current score is: ${playerScore}, whereas the computer's score is ${computerScore}.`);
                console.log(`Round number: ${i + 1}`)
                if (playerScore > computerScore) {
                    console.log(`Hurray you won! Your final scores is: ${playerScore}  against the computer's final score: ${computerScore}. Well done!`);
                } else {
                    console.log(`Oh no, you lost! Your final scores is: ${playerScore}  against the computer's final score: ${computerScore}. Better luck next time!`);
                }
                roundNumber--;
                break;
            case roundNumber >= 2:
                console.log(`${gameResult} Your current score is: ${playerScore}, whereas the computer's score is ${computerScore}.`);
                console.log(`Round number: ${i + 1}`)
                roundNumber--;
                break;
        }
    } 
}


console.log(game());

alert ("Thanks for playing! Want to play again? Press F5 or refresh this page :)")