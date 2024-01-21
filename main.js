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

function round(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    return "Tie";
  } else if (playerChoice === "rock" && computerChoice === "scissors") {
    return "player";
  } else if (playerChoice === "paper" && computerChoice === "rock") {
    return "player";
  } else if (playerChoice === "scissors" && computerChoice === "paper") {
    return "player";
  }
  return "computer";
}

console.log(round("rock", "scissors"));
