function getComputerChoice(){
    var randomNumberGenerator = Math.floor(Math.random() * 3) + 1
    if(randomNumberGenerator == 1){
        return 'Rock';
    }
    else if(randomNumberGenerator == 2){
        return 'Paper';
    }
    else{
        return 'Scissors';
    }
}

function playRound(playerSelection, computerSelection) {

    var result;

    if(playerSelection === 'Paper' && computerSelection === 'Rock'){

        return result = "Win";

    }else if(playerSelection === 'Rock' && computerSelection === 'Scissors'){
        
        return result = "Win";

    }else if(playerSelection === 'Scissors' && computerSelection === 'Paper'){

        return result = "Win";

    }else if(playerSelection === 'Rock' && computerSelection === 'Paper'){

        return result = "Lose";

    }else if(playerSelection === 'Sciors' && computerSelection === 'Rock'){

        return result = "Lose";

    }else if(playerSelection === 'Scissors' && computerSelection === 'Paper'){

        return result = "Lose";

    }else {
        return result = "Draw";
    }

}

function game(){

    let playerScore = 0;
    let computerScore = 0;
    
    for(var i = 0; i <= 4; i++){

        const playerSelection = prompt("What's your Choice?")
        const computerSelection = getComputerChoice();
        const round =(playRound(playerSelection, computerSelection));
        
        if(round === "Win"){
            playerScore++;
        }else if(round === "Lose"){
            computerScore++;
        }else{
            playerScore++;
            computerScore++;
        }
    } 
    
    if(playerScore > computerScore){
        console.log("you Win your score:" + playerScore + "\nComputer Score:" + computerScore);
    }else if(playerScore < computerScore){
        console.log("you lose your score:" + playerScore + "\nComputer Score:" + computerScore);
    }else{
        console.log("it's a draw your score:" + playerScore + "\nComputer Score:" + computerScore);
    }
}

game();