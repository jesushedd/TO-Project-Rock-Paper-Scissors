const options = document.querySelector(".options");
const scoresFrame = document.querySelector(".scores");

let humanScore = 0
let computerScore = 0
let player = ""
let pc = ""
let rounds = 1


//Add events handlesr for buttons, using delegation

options.addEventListener("click", (e) =>{
    let value = e.target.value;
    if (value == undefined){
        
        return;
    }
    //console.log(typeof value);
    player = value;
    //console.log(player);
    playRound()
})




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
    //scoresFrame.removeChild(document.querySelector("#pc-score"));
    //scoresFrame.removeChild(document.querySelector("#player-score"));
    scoresFrame.removeChild(document.querySelector("#round-counter"));

    let winnerMessage = " WINS!";
    let winner = "";
    if (computerScore === humanScore){
        winnerMessage = "TIE!";
    } else{
        winner = computerScore > humanScore? "COMPUTER": "PLAYER";
    }

    winnerMessage = winner + winnerMessage;

    let winnerdiv = document.createElement("div");
    winnerdiv.textContent = winnerMessage;

    scoresFrame.appendChild(winnerdiv);
}


function playRound(){
    
    //player = getHumanChoice()
    pc = getComputerChoice();
    //showPcAnswer()
    evaluate();
    rounds++;
    updateScores();
    checkGame();
    
}

function checkGame(){
    if (rounds > 5){
        disableOptions();
        declareWinner()
    }
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


function updateScores(){
    document.querySelector("#pc-score").textContent = "PC Score:\t" + computerScore;
    document.querySelector("#player-score").textContent = "Player Score:\t" + humanScore;
    //Show round number
    let nextRound = rounds >= 5? 5: rounds; 
    document.querySelector("#round-counter").textContent = "Round: \t" + nextRound;
    
}

function disableOptions(){
    let weas = options.children;
    console.log(weas)
    Array.from (weas).forEach((b) => {
        console.log(typeof b)
        b.setAttribute("disabled", "");
    })
}