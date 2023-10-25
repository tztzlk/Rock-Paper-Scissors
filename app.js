const rockButton = document.getElementById("rockButton");
const paperButton = document.getElementById("paperButton");
const scissorsButton = document.getElementById("scissorsButton");
const gameOver = document.getElementById("result");

  function getComputerChoice() {
  const game = ["Ножницы", "Бумага", "Камень"];
  const random = Math.floor(Math.random() * game.length);
  return game[random];
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "ничья " + playerSelection;
  } else if (
    (playerSelection === "rock" && computerSelection === "Ножницы") ||
    (playerSelection === "paper" && computerSelection === "Камень") ||
    (playerSelection === "scissors" && computerSelection === "Бумага")
  ) {
    return "you win " + playerSelection + " beats " + computerSelection;
  } else {
    return "you lose! " + computerSelection + " beats " + playerSelection;
  }
}

rockButton.addEventListener("click", function() {
  const computerSelection = getComputerChoice();
  gameOver.innerText = playRound("rock", computerSelection);
});

paperButton.addEventListener("click", function() {
  const computerSelection = getComputerChoice();
  gameOver.innerText = playRound("paper", computerSelection);
});

scissorsButton.addEventListener("click", function() {
  const computerSelection = getComputerChoice();
  gameOver.innerText = playRound("scissors", computerSelection);
});


