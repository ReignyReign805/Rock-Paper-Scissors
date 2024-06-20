
let humanScore = 0,
    computerScore = 0;


function getComputerChoice(){
    const compplay = ["Rock", "Paper", "Scissors"];
    const randomChoice = Math.floor(Math.random() * 3);
    const computerChoice = compplay[randomChoice];
    return computerChoice;
}

console.log(getComputerChoice())

function getHumanChoice(){
    const humanplay = ["Rock", "Paper", "Scissors"];
    const inputChoice = window.prompt("Please enter rock, paper, or scissors:");

    const lastChoiceStart = inputChoice.charAt(0).toUpperCase();
    const lastChoiceEnd = inputChoice.slice(1).toLowerCase();
    const humanChoice = lastChoiceStart + lastChoiceEnd;

    if (humanplay.includes(humanChoice)){
        console.log(humanChoice);
        return humanChoice;
    } else {
        console.log(`Input is out of range. Try again.`);
        return null;
    }
    
}

function playRound(humanChoice, computerChoice){

    if (computerChoice === humanChoice){
        console.log(`Both are the same`);
    }else if(
        (humanChoice === "Rock" && computerChoice === "Scissors") ||
        (humanChoice === "Paper" && computerChoice === "Rock") ||
        (humanChoice === "Scissors" && computerChoice === "Paper") 
    ){
        humanScore++;
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
    }else{
        computerScore++;
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
    }
    console.log(computerChoice)
    console.log(humanChoice)
    console.log(`Human Score = ` + humanScore + 
                `\nComputer Score = ` + computerScore
    );
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();


playRound(humanSelection, computerSelection);