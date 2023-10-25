   const rockButton = document.getElementById("rockButton");
    const paperButton = document.getElementById("paperButton");
    const scissorsButton = document.getElementById("scissorsButton");
   const gameOver = document.getElementById("result")

function getComputerChoice(){
   const game = ["Ножницы", "Бумага", "Камень"];
    const random = Math.floor(Math.random() * game.length);
    return game[random]
}

const computerSelection = getComputerChoice()
      
      const playerSelection = ["rock", "paper", "scissors"];

      function playRaund(playerSelection, computerSelection) {
        if (playerSelection === computerSelection) {
          return "ничья " + playerSelection;
        } else if (
          (playerSelection === "rock" && computerSelection === "scissors") ||
          (playerSelection === "paper" && computerSelection === "rock") ||
          (playerSelection === "scissors" && computerSelection === "paper")
        ) {
          return "you win " + playerSelection + " beats " + computerSelection;
        } else {
          return "you lose! " + computerSelection + " beats " + playerSelection;
        }
      }


rockButton.addEventListener("click", function() {
   const computerSelection = getComputerChoice();
   gameOver.innerText = playRaund("rock", computerSelection);
  
 });
 
 paperButton.addEventListener("click", function() {
   const computerSelection = getComputerChoice();
   gameOver.innerText = playRaund("paper", computerSelection);
   
 });
 
 scissorsButton.addEventListener("click", function() {
   const computerSelection = getComputerChoice();
   gameOver.innerText = playRaund("scissors", computerSelection);
   
 });


 
 

 
 
 
 
