// Get elements from html
const buttons = Array.from(document.getElementsByClassName("action"));
const playerScoreContainer = document.getElementById("player-score");
const computerScoreContainer = document.getElementById("computer-score");

let playerScore = 0;
let computerScore = 0;

// Event listenrs for the buttons
buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    let playerInput = tranformInput(e.target.dataset.value);
    playRound(playerInput);
  });
});

// Coputer's Move
function computerPlay() {
  return Math.floor(Math.random() * 3) + 1;
}

// Checking if user has provided valid input
function filterInput(input) {
  if (input !== "rock" && input !== "paper" && input !== "scissors") {
    getPlayerInput();
  }
}
// Tranforming user input into numberical form to match computer's move
function tranformInput(input) {
  filterInput;

  if (input === "rock") {
    return 1;
  } else if (input === "paper") {
    return 2;
  } else {
    return 3;
  }
}

// Checks who won
function checkWinOrLoss(move1, move2) {
  console.log(`Player-Move: ${move1}`);
  console.log(`computer move: ${move2}`);

  if (move1 === 1) {
    if (move2 === 2) {
      return 0;
    }
    return 1;
  }

  if (move1 === 2) {
    if (move2 === 3) {
      return 0;
    }
    return 1;
  }

  if (move1 === 3) {
    if (move2 === 1) {
      return 0;
    }
    return 1;
  }
}

// Plays one round
function playRound(playerMove) {
  let computerMove = computerPlay();

  if (computerMove === playerMove) {
    console.log("It's a draw");
  } else if (checkWinOrLoss(playerMove, computerMove)) {
    console.log("You won! It's pure luck though!");
    updatePlayerScore();
  } else {
    console.log("Uh-oh! Looks like you lost!");
    updateComputerScore();
  }
  return 0;
}

// Updates player score
function updatePlayerScore() {
  playerScore++;
  playerScoreContainer.textContent = `Player Score: ${playerScore}`;
}

// Updates computer score
function updateComputerScore() {
  computerScore++;
  computerScoreContainer.textContent = `Computer Score: ${computerScore}`;
}
