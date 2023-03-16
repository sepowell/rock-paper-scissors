
let playerChoice = "";
let computerChoice = ""; 

let playerScore = document.getElementById("playerScore");
let computerScore = document.getElementById("computerScore");
let playerWins = 0;
let computerWins = 0;

let gameResult = document.getElementById("gameResult");
let roundResult = document.getElementById("roundResult");
let gameScore = document.getElementById("gameScore");

/**
 * Function getPlayerChoice recieves input from user 
 * then triggers the getComputerChoice and game
 * functions.
 */

function getPlayerChoice(choice) {
  switch (choice) {
    case 'Rock':
      playerChoice = "Rock";
      break;
      
    case 'Paper':
      playerChoice = "Paper";
      break;
      
    case 'Scissors':
      playerChoice = "Scissors";
      break;

  }
  getComputerChoice();
  game();

}

/**
 * Function getComputerChoice randomly generates 
 * a number between 0 and 2. Then returns as follows
 * 0 = Rock
 * 1 = Paper
 * 2 = Scissors
 */

function getComputerChoice() {
  let choiceNum = Math.floor(Math.random() * 3);

  switch (choiceNum) {
    case 0:
      computerChoice = "Rock";
      break;
    
    case 1:
      computerChoice = "Paper";
      break;
      
    case 2:
      computerChoice = "Scissors";
      break;
  }
}

/**
 * playRound only initalizes when the player makes their 
 * choice.
 * 
 * runs the inputs through a nested if else statement
 * hooking from the playersChoice first to find the 
 * outcome then tallys the win score to the respictive
 * plays counter.
 */

function playRound() {
  if (playerChoice == "Rock") {
    if (computerChoice == "Rock") {
      roundResult.innerText = "Tie!";
    } else if (computerChoice == "Paper") {
      roundResult.innerText = "You lose! Paper beats Rock!";
      computerWins += 1;
    } else if (computerChoice == "Scissors") {
      roundResult.innerText = "You win! Rock beats Scissors!"
      playerWins += 1;
    }

  } else if (playerChoice == "Paper") {
    if (computerChoice == "Rock") {
      roundResult.innerText = "You win! Paper beats Rock!";
      playerWins += 1;
    } else if (computerChoice == "Paper") {
      roundResult.innerText = "Tie!";
    } else if (computerChoice == "Scissors") {
      roundResult.innerText = "You Lose! Scissors beats Paper!"
      computerWins += 1;
    }

  } else if (playerChoice == "Scissors") {
    if (computerChoice == "Rock") {
      roundResult.innerText = "You Lose! Rock beats Scissors!";
      computerWins+= 1;
    } else if (computerChoice == "Paper") {
      roundResult.innerText = "You win! Scissors beats Paper!";
      playerWins += 1;
    } else if (computerChoice == "Scissors") {
      roundResult.innerText = "Tie!"
    }
  }
}   

/**
 * Function game() runs the playRound() function, then
 * updates the score counter on the DOM, and always checks
 * to see what the score is while updating text on the dom
 * to let the user know what the status of the game is.
 */

function game() {
  playRound();
  playerScore.innerText = playerWins;
  computerScore.innerText = computerWins;

  if (playerWins == 5 && computerWins < 5) {
    gameResult.innerText = "You Win!";
    disableGame();
  } else if (playerWins < 5 && computerWins == 5) {
    gameResult.innerText = "You Lose... :-("
    disableGame();
  } else {
    gameResult.innerText = "You got this!"
  }
}

function disableGame() {
  document.getElementById("rock").disabled = true;
  document.getElementById("paper").disabled = true;
  document.getElementById("scissors").disabled = true;
}
