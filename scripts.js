
let playerChoice = "";
let computerChoice = getComputerChoice(); 

let playerScore = document.getElementById("playerScore");
let computerScore = document.getElementById("computerScore");
let playerWins = 0;
let computerWins = 0;

let gameResult = document.getElementById("gameResult");
let roundResult = document.getElementById("roundResult");
let gameScore = document.getElementById("gameScore");

/**
 * Function getPlayerChoice recieves input from user 
 * then triggers the game function.
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
      return "Rock";
    
    
    case 1:
      return "Paper";
      
      
    case 2:
      return "Scissors";
    
  }
}

/**
 * playRound function takes input from the computerChoice 
 * variable. computerChoice variable is assigned to 
 * getComputerChoice function, and then compares to
 * players choice.
 * 
 * only initalizes when the player makes their choice.
 * 
 * runs the inputs through a nested if else statement
 * hooking from the playersChoice first to find the 
 * outcome then tallys the win score to the respictive
 * plays counter.
 */

function playRound(computerChoice) {
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
  playRound(computerChoice);
  playerScore.innerText = playerWins;
  computerScore.innerText = computerWins;

  if (playerWins == 5 && computerWins < 5) {
    gameResult.innerText = "You Win!";
  } else if (playerWins < 5 && computerWins == 5) {
    gameResult.innerText = "You Lose... :-("
  } else {
    gameResult.innerText = "You got this!"
  }
}
