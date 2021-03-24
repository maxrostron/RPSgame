//Global Variables
let choices = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;
let roundNumber = 0;

//Set Up
let roundEntry = prompt("Please enter how many rounds you would like to play", "");
let numberOfRounds = parseInt(roundEntry, 10);


//Game Start
while (roundNumber < numberOfRounds) {

  
    //Battle
    let playerSelection = prompt("Please enter your choice").toLowerCase();
    let computerSelection = choices[Math.floor(Math.random() * choices.length)]
    
    //Decision
    function playRound(computerSelection, playerSelection) {
    
        if(computerSelection == choices[0] && playerSelection == choices[1]) {
            playerScore++;
            return "You Win! Paper beats Rock!";
        }
        else if (computerSelection == choices[1] && playerSelection == choices[2]) {
            playerScore++;
            return "You Win! Scissors beats Paper!";
        }
        else if (computerSelection == choices[2] && playerSelection == choices[0]) {
            playerScore++;
            return "You Win! Rock beats Scissors!"
        }
        
        
        if(playerSelection == choices[0] && computerSelection == choices[1]) {
            computerScore++;
            return "You Lose! Paper beats Rock!";
        }
        else if (playerSelection == choices[1] && computerSelection == choices[2]) {
            computerScore++;
            return "You Lose! Scissors beats Paper!";
        }
        else if (playerSelection == choices[2] && computerSelection == choices[0]) {
            computerScore++;
            return "You Lose! Rock beats Scissors!"
        }

        else if(playerSelection == choices[0] && computerSelection == choices[0]) {
            return "Draw! Replay round!"
        }
        else if(playerSelection == choices[1] && computerSelection == choices[1]) {
            return "Draw! Replay round!"
        }
        else if(playerSelection == choices[2] && computerSelection == choices[2]) {
            return "Draw! Replay round!"
        }
    }

 //Score Keeping
    function roundCount(playerScore, computerScore) {
        return roundNumber = playerScore + computerScore;
    }
    
    function roundsRemaining(numberOfRounds, roundNumber) {
        let roundsCalc = (numberOfRounds - roundNumber);
        return roundsCalc3;
    }

    console.log(playRound(computerSelection, playerSelection));
    console.log("Current Round: " + roundCount(playerScore, computerScore) + " / " + numberOfRounds);
    console.log("Computer Score: " + computerScore);
    console.log("Player Score: " + playerScore);   

}

//Post-Game

if(playerScore > computerScore) {
    console.log("Well done! You beat the computer!")
}
else {
    console.log("You lose - better luck next time!")
}










