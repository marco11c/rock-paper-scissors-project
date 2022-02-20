
let computerSelection;
let playerSelection;
let playerScore = 0;
let computerScore = 0;
let roundCount = 0;
let resultBox = document.querySelector(".results");
let botGraphic = document.querySelector(".bot-graphic");
let playerGraphic = document.querySelector(".player-graphic");
let botLabel = document.querySelector(".bot-score");
let playerLabel = document.querySelector(".player-score");
let roundLabel = document.querySelector(".round-label");
let roundMessage = document.querySelector(".round-message");
let currentPlayerMove = document.querySelector(".current-player-move");
let currentBotMove = document.querySelector(".current-bot-move");
let resetButton = document.querySelector(".reset-btn");
let rock = "✊";
let paper = "🖐";
let scissors = "✌️";

let playAgainBtn = document.querySelector('.modal-btn');
let endGameModal = document.querySelector('.modal');
let modalHeader = document.querySelector('.modal-header');
let modalMessage = document.querySelector('.modal-message');
let modalBackdrop = document.querySelector('.modal-backdrop');

playAgainBtn.addEventListener("click", playAgain);

document.addEventListener("touchstart", function() {},false);


resetButton.addEventListener("click", () => resetGame() );

let rockButton = document.querySelector(".rock-btn");
rockButton.addEventListener("click",()=> playRound("rock", computerSelection));
rockButton.addEventListener("click", ()=> {playerGraphic.textContent = rock;});
rockButton.addEventListener("click", ()=> {currentPlayerMove.textContent = "ROCK";});

let paperButton = document.querySelector(".paper-btn");
paperButton.addEventListener("click", () => playRound("paper", computerSelection));
paperButton.addEventListener("click", ()=> {playerGraphic.textContent = paper;});
paperButton.addEventListener("click", ()=> {currentPlayerMove.textContent = "PAPER";});


let scissorsButton = document.querySelector(".scissors-btn");
scissorsButton.addEventListener("click", ()=> playRound("scissors", computerSelection));
scissorsButton.addEventListener("click", ()=> {playerGraphic.textContent = scissors;});
scissorsButton.addEventListener("click", ()=> {currentPlayerMove.textContent = "SCISSORS";});


function computerPlay(){
    let selection = Math.floor(Math.random()*3)+1;

    switch (selection) {
        case 1:
            botGraphic.textContent = rock;
            currentBotMove.textContent = "ROCK";
            return 'rock';
            break;
        case 2:
            botGraphic.textContent = paper;
            currentBotMove.textContent = "PAPER";
            return  'paper';
            break;
        case 3:
            botGraphic.textContent = scissors;
            currentBotMove.textContent = "SCISSORS";
            return 'scissors';
            break;

    }
}

function playRound(playerSelection, computerSelection){
    computerSelection = computerPlay();
    //looks for CASE that is TRUE and returns code in that CASE
    switch(true){
        //If both make same selectin - TIE
        case playerSelection===computerSelection:
            roundMessage.textContent = `TIE!`;
            break;
        //All possible win moves for PLAYER
        case (playerSelection==='rock'&&computerSelection==='scissors')||(playerSelection==='paper'&&computerSelection==='rock')||(playerSelection==='scissors'&&computerSelection==='paper'):
            ++playerScore;
            roundMessage.textContent = `YOU WIN! ${playerSelection} beats ${computerSelection}`;
            break;
        //All other possibilities are of computer winning
        default:
            ++computerScore;
            roundMessage.textContent = `YOU LOSE! ${computerSelection} beats ${playerSelection}`;
            break;

    }
    ++roundCount;
    roundLabel.textContent = `Round: ${roundCount}`;
    playerLabel.textContent = `YOU: ${playerScore}`;
    botLabel.textContent = `CPU: ${computerScore}`;
    if(isGameOver()){
        openModal();
    }
}

function resetGame() {
    roundMessage.textContent = "First to 5 wins!";
    playerScore = 0;
    computerScore = 0;
    roundCount = 0;
    roundLabel.textContent = `Round: ${roundCount}`;
    playerLabel.textContent = `YOU: ${playerScore}`;
    botLabel.textContent = `CPU: ${computerScore}`;
    currentBotMove.textContent = " ";
    currentPlayerMove.textContent = " ";
    botGraphic.textContent = "❔";
    playerGraphic.textContent = "❔";
}

function isGameOver() {
    return playerScore === 5 || computerScore === 5 ;
}

function openModal() {
    endGameModal.style.display = 'block';
    modalBackdrop.style.display = 'block';
    if (playerScore === 5){
        modalHeader.textContent = "GAME OVER!";
        modalMessage.textContent = `🏆 You Won! ${playerScore}-${computerScore}`;
    } else if (computerScore === 5){
        modalHeader.textContent = "GAME OVER";
        modalMessage.textContent = `You Lose! ${playerScore}-${computerScore}`;
    }

}

function playAgain() {
    endGameModal.style.display = 'none';
    modalBackdrop.style.display = 'none';
    resetGame();
}