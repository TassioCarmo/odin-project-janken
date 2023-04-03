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

        return result = "You Win! Paper beats Rock";

    }else if(playerSelection === 'Rock' && computerSelection === 'Scissors'){
        
        return result = "You Win! Rock beats Scissors";

    }else if(playerSelection === 'Scissors' && computerSelection === 'Paper'){

        return result = "You Win! Scissors beats Paper";

    }else if(playerSelection === 'Rock' && computerSelection === 'Paper'){

        return result = "You Lose! Paper beats Rock";

    }else if(playerSelection === 'Scissors' && computerSelection === 'Rock'){

        return result = "You Lose! Rock beats Scissors";

    }else if(playerSelection === 'Scissors' && computerSelection === 'Paper'){

        return result = "You Lose! Scissors beats Paper";

    }else {
        return result = "Draw"
    }

}

function game(){
    
    for(var i = 0;i < 4;i++){
        const playerSelection = prompt("What's your Choice?")
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
    } 
}

game();