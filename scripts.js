
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
