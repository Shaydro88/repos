let playerScore = Number("");
let computerScore = Number("");

function getComputerChoice(computerChoice) {
  computerChoice = Math.random();

  if (computerChoice <= 1 / 3) {
    computerChoice = "rock";
  } else if (computerChoice > 1 / 3 && computerChoice <= 2 / 3) {
    computerChoice = "paper";
  } else {
    computerChoice = "scissors";
  }
  return computerChoice;
}

function playGame(playerSelection, computerSelection) {
  computerSelection = getComputerChoice();
  //playerSelection = prompt("please enter Rock, Paper, or Scissors");

  let result;
  if (playerSelection === "rock") {
    if (computerSelection === "rock") {
      result = "You Tied!";
    } else if (computerSelection === "paper") {
      result = "You Lose!";
    } else if (computerSelection === "scissors") {
      result = "You Win!";
    }
  }
  if (playerSelection === "paper") {
    if (computerSelection === "rock") {
      result = "You Win!";
    } else if (computerSelection === "paper") {
      result = "You Tied!";
    } else if (computerSelection === "scissors") {
      result = "You Lose!";
    }
  }
  if (playerSelection === "scissors") {
    if (computerSelection === "rock") {
      result = "You Lose!";
    } else if (computerSelection === "paper") {
      result = "You Win!";
    } else if (computerSelection === "scissors") {
      result = "You lose!";
    }
  }

  if (result === "You Win!") {
    playerScore++;
  } else if (result === "You Lose!") {
    computerScore++;
  }
  console.log(
    "player score" +
      " " +
      playerScore +
      " " +
      "computer score" +
      " " +
      computerScore
  );

  console.log(playerSelection);
  console.log(computerSelection);
  console.log(result);
  return result;
}
for (let i = 0; i < 100; i++) {
  playGame();
  if (playerScore === 5 || computerScore === 5) {
    break;
  }
}
