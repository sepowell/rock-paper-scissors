let playerChoice = "";
let computerChoice = ""; 

let playerScore = document.getElementById("playerScore");
let computerScore = document.getElementById("computerScore");
let playerWins = 0;
let computerWins = 0;

let gameResult = document.getElementById("gameResult");
let roundResult = document.getElementById("roundResult");
let gameScore = document.getElementById("gameScore");

const container = document.querySelector('.container');

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

function disableGame() {
  document.getElementById("rock").disabled = true;
  document.getElementById("paper").disabled = true;
  document.getElementById("scissors").disabled = true;

  addNewGameBtn();
}

// New Game Button
const newGameBtn = document.createElement('button');
newGameBtn.classList.add('newgamebtn');
newGameBtn.textContent = "New Game?";
newGameBtn.addEventListener("click", () => {
  newGame();
});

function addNewGameBtn() {
  container.appendChild(newGameBtn);
}

function newGame() {
  playerWins = 0;
  computerWins = 0;

  playerScore.innerText = playerWins;
  computerScore.innerText = computerWins;

  roundResult.innerText = "Ready to play!";
  gameResult.innerText = "";

  document.getElementById("rock").disabled = false;
  document.getElementById("paper").disabled = false;
  document.getElementById("scissors").disabled = false;

  newGameBtn.remove();
}