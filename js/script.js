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


// Function to determine the outcome of the game
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

// Function to get computer's random choice for the game
function getComputerChoice(){
    // Array of possible choices
    const possibilities = ["Rock","Paper","Scissors"];
    // Generate a random index
    const randomIndex = Math.floor(Math.random() * 3);
    // Return the choice corresponding to the random index
    return possibilities[randomIndex];
}

function win(userChoice,computerChoice){
    // Function to handle Win
    // Increment User score
    userScore++;
    // innerHTML changes the html of this specific tag/id/class
    // Update score display
    userScore_span.innerHTML = userScore;
    // E6 concatenate string
    // Display result message
    result_div.innerHTML = `Player's ${userChoice} beats Computer's ${computerChoice} , You win!`;
}

// Function to handle Lost
function lost(userChoice,computerChoice){
    // Increment PC scores
    computerScore++;
    // Update score display
    computerScore_span.innerHTML = computerScore;
    // Display result message
    result_div.innerHTML = `Player's ${userChoice} loses Computer's ${computerChoice} , You lose!`;


}

// Function to handle draw
function draw(userChoice,computerChoice){
    // Increment both scores
    userScore++;
    computerScore++;
    // Update scores display
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    // Display result message
    result_div.innerHTML = `Player's ${userChoice} equals Computer's ${computerChoice} , it's a draw!`;


}


main()
