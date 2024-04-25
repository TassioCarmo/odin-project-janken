let userScore = 0;
let computerScore = 0;

//cash(store something for future use) the DOM
// makes the code faster because you don't need to call the method every single time you need to use its value
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result > p");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");

function main(){

    rock_div.addEventListener('click', function(){
        game('Rock');
    });

    paper_div.addEventListener('click', function(){
        game('Paper');
    });

    scissors_div.addEventListener('click', function(){
        game('Scissors');
    });

}



function game(userChoice){
    const computerChoice = getComputerChoice();

    switch(userChoice + computerChoice){
        case "RockScissors": case "PaperRock": case "ScissorsPaper":
            win(userChoice,computerChoice);
            break;
        case "ScissorsRock": case "RockPaper": case "PaperScissors":
            lost(userChoice,computerChoice);
            break;
        default:
            draw(userChoice,computerChoice);
            break;
    }

}

function getComputerChoice(){
    const possibilities = ["Rock","Paper","Scissors"];
    const randomIndex = Math.floor(Math.random() * 3);
    return possibilities[randomIndex];
}

function win(userChoice,computerChoice){
    userScore++;
    // innerHTML changes the html of this specific tag/id/class
    userScore_span.innerHTML = userScore;
    // E5
    /*result_div.innerHTML = userChoice + " Beats " + computerChoice + ", You win";*/
    // E6 cocataneate a string
    result_div.innerHTML = `Player's ${userChoice} beats Computer's ${computerChoice} , You win!`;
}

function lost(userChoice,computerChoice){
    computerScore++;
    computerScore_span.innerHTML = computerScore;
    result_div.innerHTML = `Player's ${userChoice} loses Computer's ${computerChoice} , You lose!`;


}

function draw(userChoice,computerChoice){
    userScore++;
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_div.innerHTML = `Player's ${userChoice} equals Computer's ${computerChoice} , it's a draw!`;


}


main()
