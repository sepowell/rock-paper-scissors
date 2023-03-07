
let playerChoice = getPlayerChoice();
let computerChoice = getComputerChoice(); 

let gameResult = document.getElementById("gameResult");
let roundResult = document.getElementById("roundResult");
let gameScore = document.getElementById("gameScore");

/**
 * Function getPlayerChoice recieves input from user 
 * then for now just logs it out. 
 */

function getPlayerChoice(choice) {
  switch (choice) {
    case 'Rock':
      console.log("Rock");
      break;
    
    case 'Paper':
      console.log("Paper");
      break;

    case 'Scissors':
      console.log("Scissors");
      break;
      
  }
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
 * playRound function takes input from playerChoice
 * and computerChoice variable. computerChoice
 * variable is assigned to getComputerChoice function,
 * while playerChoice isnt linked yet but its function
 * is set up.
 * 
 * runs the inputs through a nested if else statement
 * hooking from the playersChoice first to find the 
 * outcome and modifies text on DOM displaying the
 * result of the round. 
 */

function playRound(playerChoice, computerChoice) {
  if (playerChoice == "Rock") {
    if (computerChoice == "Rock") {
      roundResult.innerText = "Tie!";
    } else if (computerChoice == "Paper") {
      roundResult.innerText = "You lose! Paper beats Rock!";
    } else if (computerChoice == "Scissors") {
      roundResult.innerText = "You win! Rock beats Scissors!"
    }

  } else if (playerChoice == "Paper") {
    if (computerChoice == "Rock") {
      roundResult.innerText = "You win! Paper beats Rock!";
    } else if (computerChoice == "Paper") {
      roundResult.innerText = "Tie!";
    } else if (computerChoice == "Scissors") {
      roundResult.innerText = "You Lose! Scissors beats Paper!"
    }

  } else if (playerChoice == "Scissors") {
    if (computerChoice == "Rock") {
      roundResult.innerText = "You Lose! Rock beats Scissors!";
    } else if (computerChoice == "Paper") {
      roundResult.innerText = "You win! Scissors beats Paper!";
    } else if (computerChoice == "Scissors") {
      roundResult.innerText = "Tie!"
    }
  }
}   
