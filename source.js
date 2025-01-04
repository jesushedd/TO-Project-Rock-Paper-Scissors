
let humanScore = 0
let computerScore = 0
let player = ""
let pc = ""
let rounds = 1


playGame()










function playGame(){
    while (rounds <= 5){
        alert("Round Nº" + rounds)
        playRound();
        rounds++;
    }
    declareWinner()
    showFinalScore()
}






function showFinalScore(){
    alert(`Computer Score: ${computerScore}\nHuman Score: ${humanScore}`)
}

function declareWinner(){
    if (computerScore > humanScore){
        alert("Computer es Abosolute Winner!")
    } else if (humanScore > computerScore){
        alert("Human is absolute Winner!")
    } else {
        alert("Absolute Tie!")
    }
}
















function playRound(){
    player = getHumanChoice()
    pc = getComputerChoice()
    showPcAnswer()
    evaluate()
}





function evaluate(){
    if (player === "paper"){
        switch (pc){
            case "rock":
                humanScore++;
                alert("Human Wins!");
                break;
            case "paper":
                alert("Tie!");
                break;
            case "scissors":
                computerScore++;
                alert("Computer Wins")
        }
    } else if(player === "rock"){
        switch (pc){
            case "rock":
                alert("Tie!");
                break;
            case "paper":
                computerScore++
                alert("Computer Wins!");
                break;
            case "scissors":
                humanScore++;
                alert("Human Wins")
        }
    } else if(player === "scissors"){
        switch (pc){
            case "rock":
                computerScore++;
                alert("Computer wins!")
                break;
            case "paper":
                humanScore++;
                alert("Human Wins!")
                break;
            case "scissors":
                alert("Tie!")
        }
    }
        

}

function showPcAnswer(){
    alert("Computer got" + " " + pc)
}














function getComputerChoice(){
    let option = getOneOfFour()

    if (option === 0) return "rock";
    if (option === 1) return "paper";
    if (option === 2) return "scissors"

}

function getOneOfFour(){
    let max = 3;
    let out = Math.floor(Math.random() * max);
    

    return out;
}

function getHumanChoice(){
    let entered = prompt("Enter your human option!").trim().toLowerCase()
    let posibleOptions = ["rock", "paper", "scissors"]
    if (posibleOptions.includes(entered)){
        return entered
    } else {
        alert("Invalid Option! Try Again")
        return getHumanChoice();
    }
}