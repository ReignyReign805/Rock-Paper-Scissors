
    let humanScore = 0,
        computerScore = 0;

    function restartGame(){
        humanScore = 0;
        computerScore = 0;
        updateScoreDisplay();
        document.getElementById('restartBtn').style.display = 'none';
    }
    function playGame() {

        let imgs = document.querySelectorAll('img');
        imgs.forEach((img) => {
            img.addEventListener(('click'), () => {
                    playRound(img.id);
            });
        });
    }
    function getWinner(){
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        return Math.max(humanSelection, computerSelection);
    }

    function updateScoreDisplay(){
        document.getElementById('humanScore').textContent = humanScore;
        document.getElementById('computerScore').textContent = computerScore;
    }

    // function getHumanChoice() {
    //     // const humanplay = ["Rock", "Paper", "Scissors"];

    //     // const lastChoiceStart = inputChoice.charAt(0).toUpperCase();
    //     // const lastChoiceEnd = inputChoice.slice(1).toLowerCase();
    //     // const humanChoice = lastChoiceStart + lastChoiceEnd;


    //     // if (humanplay.includes(humanChoice)) {
    //     //     console.log("Input: " + humanChoice);
    //     //     return humanChoice;
    //     // } else {
    //     //     console.log(`Input is out of range. Try again.`);
    //     //     return null;
    //     // }

    // }

    function getComputerChoice() {
        const compplay = ["Rock", "Paper", "Scissors"];
        const randomChoice = Math.floor(Math.random() * 3);
        return compplay[randomChoice];
    }
    
    function playRound(humanChoice) {
        const computerChoice = getComputerChoice();

        if (computerChoice === humanChoice) {
             result = `IT'S A TIE!`;
        } else if (
            (humanChoice === "Rock" && computerChoice === "Scissors") ||
            (humanChoice === "Paper" && computerChoice === "Rock") ||
            (humanChoice === "Scissors" && computerChoice === "Paper")
        ) {
            humanScore++;
            result = `YEY! YOU WIN!`;
        } else {
            computerScore++;
            result = `AWW, YOU LOSE!`;
        }

        updateScoreDisplay();
        document.getElementById('result').textContent = result;

        if (humanScore === 5 || computerScore === 5) {
            announceWinner();
        }
        
        document.getElementById('human_choice').textContent = humanChoice;
        document.getElementById('computer_choice').textContent = computerChoice;
    }

    function announceWinner(){
        let winner = humanScore === 5 ? "PLAYER 1" : "COMPUTER";
        document.getElementById('result').textContent = `${winner} WINS THE GAME!`;
        document.getElementById('restartBtn').style.display = 'block';
    }

    document.addEventListener('DOMContentLoaded', () => {
        playGame();
        updateScoreDisplay();
        document.getElementById('restartBtn').addEventListener('click', restartGame);
    }); 