

//функция рандом комп 
function getComputerChoice(){
    const game = ["Ножницы", "Бумага", "Камень"];
    const random = Math.floor(Math.random() * game.length);
    return game[random]
}



