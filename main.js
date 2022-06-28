// Get elements from html
const playerButtons = Array.from(
  document.getElementsByClassName("player-action")
);
const computerButtons = Array.from(
  document.getElementsByClassName("computer-action")
);
const playerScoreContainer = document.getElementById("player-score");
const computerScoreContainer = document.getElementById("computer-score");
const message = document.getElementById("message");

let playerScore = 0;
let computerScore = 0;

// Event listenrs for the player buttons
playerButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    let playerInput = tranformInput(e.target.dataset.value);
    playRound(playerInput);
  });
});

// Coputer's Move
function computerPlay() {
  let value = Math.floor(Math.random() * 3) + 1;

  computerButtons.forEach((button) => {
    button.classList.remove("rb");
    if (Number(button.dataset.value) === value) {
      button.classList.add("rb");
    }
  });

  return value;
}

// Tranforming user input into numberical form to match computer's move
function tranformInput(input) {
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
    updateMessage("It's a draw");
  } else if (checkWinOrLoss(playerMove, computerMove)) {
    updateMessage("You won! It's pure luck though!");
    updatePlayerScore();
  } else {
    updateMessage("Uh-oh! Looks like you lost!");
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

// Displays message after one round
function updateMessage(content) {
  message.textContent = content;
}
