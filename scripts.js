
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
      break;
    case 1:
      return "Paper";
      break;
    case 2:
      return "Scissors";
  }
}

let playerChoice = "Rock";
let computerChoice = getComputerChoice(); 

/**
 * playRound function takes input from playerChoice
 * and computerChoice variable, (computerChoice
 * variable is assigned to getComputerChoice function,
 * while playerChoice variable is static for now) and runs
 * the inputs through a nested if else statement hooking 
 * from the playersChoice first to find the outcome
 * and returns the result of the round. 
 */

function playRound (playerChoice, computerChoice) {
  if (playerChoice == "Rock") {
    if (computerChoice == "Rock") {
      return "Tie!";
    } else if (computerChoice == "Paper") {
      return "You lose! Paper beats Rock!";
    } else if (computerChoice == "Scissors") {
      return "You win! Rock beats Scissors!"
    }

  } else if (playerChoice == "Paper") {
    if (computerChoice == "Rock") {
      return "You win! Paper beats Rock!";
    } else if (computerChoice == "Paper") {
      return "Tie!";
    } else if (computerChoice == "Scissors") {
      return "You Lose! Scissors beats Paper!"
    }

  } else if (playerChoice == "Scissors") {
    if (computerChoice == "Rock") {
      return "You Lose! Rock beats Scissors!";
    } else if (computerChoice == "Paper") {
      return "You win! Scissors beats Paper!";
    } else if (computerChoice == "Scissors") {
      return "Tie!"
    }
  }
}   

console.log(playRound(playerChoice, computerChoice));
