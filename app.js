//функция рандом комп 
function getComputerChoice(){
    const game = ["Ножницы", "Бумага", "Камень"];
    const random = Math.floor(Math.random() * game.length);
    return game[random]
}

const computerSelection = getComputerChoice();
    
   

// начало раунда
function playRound(playerSelection,computerSelection){
    const player = playerSelection.toLowerCase()
    const computer = computerSelection.toLowerCase()
    if(player == computer){
        return "ничья " + playerSelection    
    }
    else if(
    (player === "Камень" && computer === "Ножницы") ||
    (player === "Бумага" && computer === "Камень") ||
    (player === "Ножницы" && computer === "Бумага")
    ){
        return("you win " + playerSelection + " beats " + computerSelection)
    }
    else{
       return("you lose! " + computerSelection + " beats " + playerSelection) 
    }
}

const playerSelection =  prompt("выберите: Ножницы, Бумага, Камень").trim()  
    if(playerSelection === "Ножницы" || playerSelection === "Бумага" || playerSelection == "Камень"){
    const result  =  playRound(playerSelection,computerSelection)
       console.log(result)
    }