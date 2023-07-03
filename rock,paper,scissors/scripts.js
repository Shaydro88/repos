let playerScore = Number("");
let computerScore = Number("");
let rockButton = document.createElement("button");
let paperButton = document.createElement("button");
let scissorsButton = document.createElement("button");

document.body.appendChild(rockButton);
document.body.appendChild(paperButton);
document.body.appendChild(scissorsButton);

rockButton.addEventListener("click", () => {
  playGame("rock");
});
paperButton.addEventListener("click", () => {
  playGame("paper");
});
scissorsButton.addEventListener("click", () => {
  playGame("scissors");
});

rockButton.textContent = "rock";
rockButton.classList.add("rockButton-js");
paperButton.textContent = "paper";
paperButton.classList.add("paperButton-js");
scissorsButton.textContent = "scissors";
scissorsButton.classList.add("scissorsButton-js");

let resultsContainer = document.createElement("div");
document.body.appendChild(resultsContainer);

let resultText = document.createElement("p");
document.body.appendChild(resultText);

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
  resultText.innerText = `You picked: ${playerSelection}  Computer picked: ${computerSelection}   
  result: ${result} 
  player score: ${playerScore} computer score: ${computerScore}`;

  if (playerScore >= 5 || computerScore >= 5) {
    playerScore = 0;
    computerScore = 0;
    resultText.textContent = "Play again!";
    return;
  }

  return result;
}
