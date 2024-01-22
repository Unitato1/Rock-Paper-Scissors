function getComputerChoice() {
  const choice = Math.round(Math.random() * 2 + 1) - 1;
  switch (choice) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
    default:
      return "rock";
  }
}
const result = document.querySelector("#result");
const score = document.querySelector("#scores");
const playAgain = document.querySelector("#play-again");
const callToAction = document.querySelector("#callToAction");
let computerPoints = 0;
let playerPoints = 0;
let numberOfRounds = 0;
function round(event) {
  if (checkWinner()) {
    return;
  }
  ++numberOfRounds;
  playAgain.style.display = "none";
  let currRound = decision(event.target.value);
  if (currRound.charAt(0) === "T") {
  } else if (currRound.charAt(4) === "w") {
    playerPoints += 1;
  } else {
    computerPoints += 1;
  }
  result.textContent = `${currRound}.`;
  score.textContent = `Current score is COMPUTER: ${computerPoints} and PLAYER: ${playerPoints}, number of rounds ${numberOfRounds}`;
  if (checkWinner()) {
    return;
  }
}

function checkWinner() {
  if (playerPoints >= 3) {
    result.textContent = "";
    callToAction.textContent = `You won, if you want to play again click the button PLAY AGAIN.`;
    playAgain.style.display = "block";
    return true;
  } else if (computerPoints >= 3) {
    result.textContent = "";
    callToAction.textContent = `You lose, if you want to play again click the button PLAY AGAIN.`;
    playAgain.style.display = "block";
    return true;
  }
  return false;
}
function decision(playerChoice) {
  const computerChoice = getComputerChoice();
  console.log(playerChoice);
  if (playerChoice === computerChoice) {
    return `TIE, ${playerChoice} and ${computerChoice}`;
  } else if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")
  ) {
    return `You win, ${playerChoice} beats ${computerChoice}`;
  }
  return `You lose, ${computerChoice} beats ${playerChoice}`;
}

playAgain.addEventListener("click", () => {
  computerPoints = 0;
  playerPoints = 0;
  numberOfRounds = 0;
  result.textContent = "";
  score.textContent = "";
  playAgain.style.display = "none";
  callToAction.textContent = "Let's play a round";
});
const test = document.querySelector("button");
console.log(test.value);
const choices = document.querySelectorAll("#options > button");
console.log(choices);
choices.forEach((choice) => {
  choice.addEventListener("click", round);
});
