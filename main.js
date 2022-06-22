// Coputer's Move
function computerPlay() {
  return Math.floor(Math.random() * 3) + 1;
}
// Get input from user
function getPlayerInput() {
  let playerChoice = prompt("Rock, Paper or Scissors").toLowerCase();

  filterInput(playerChoice);
  return tranformInput(playerChoice);
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
  if (move1 === 1) {
    if (move2 === 2) {
      return 0;
    }
    return 1;
  }

  if (move1 === 2) {
    if (move2 === 13) {
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
function playRound() {
  let computerMove = computerPlay();
  let playerMove = getPlayerInput();

  if (computerMove === playerMove) {
    console.log("It's a draw");
    return 0;
  } else if (checkWinOrLoss(playerMove, computerMove)) {
    console.log("You won! It's pure luck though!");
    return 1;
  } else {
    console.log("Uh-oh! Looks like you lost!");
    return -1;
  }
}

function game() {
  let rounds = Number(prompt("How many rounds do you want to play?"));
  let score = 0;

  for (let i = 0; i < rounds; i++) {
    score += playRound();
  }
  console.log(score);
}

game();
