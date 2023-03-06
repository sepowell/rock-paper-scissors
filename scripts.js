
let computerChoice = "";

/**
 * Function getComputerChoice randomly generates 
 * a number between 0 and 2. Then assigns as follows
 * to global scope variable computerChoice:
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
  }
  
}

getComputerChoice()

console.log (computerChoice);