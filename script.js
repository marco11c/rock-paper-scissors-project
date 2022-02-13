
let computerSelection;
let playerSelection;
let playerScore=0;
let computerScore=0;

let rockButton = document.querySelector(".rock-btn");
rockButton.addEventListener("click",() => playRound());



function computerPlay(){
    let selection = Math.floor(Math.random()*3)+1;

    switch (selection) {
        case 1:
            return 'rock';
            break;
        case 2:
            return  'paper';
            break;
        case 3:
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
            return "It's a tie!";
            break;
        //All possible win moves for PLAYER
        case (playerSelection==='rock'&&computerSelection==='scissors')||(playerSelection==='paper'&&computerSelection==='rock')||(playerSelection==='scissors'&&computerSelection==='paper'):
            playerScore++;
            return `You win! ${playerSelection} beats ${computerSelection}`;
            break;
        //All other possibilities are of computer winning
        default:
            computerScore++;
            return `You loose! ${playerSelection} is beaten by ${computerSelection}`;
            break;

    }
}

function game(){
  
}
