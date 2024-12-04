
function getRandomChoice() {
    return Math.floor(Math.random() * 3) + 1;
}

function getComputerChoice(random){
if (random == 1) {
    return "rock"; 
}   else if  (random == 2) {
    return "paper";
}   else if (random == 3) {
    return "scissors";
}
}


function getHumanChoice() {
   let pick = prompt("Pick rock, paper, or scissors?").toLowerCase();
   return pick;
}


let humanScore = 0;
let computerScore = 0;

function playGame() {
    function playRound(humanChoice, computerChoice) {
    if (humanChoice == computerChoice){
        alert("It's a tie!"); 
    }
    else if (humanChoice == 'rock' && computerChoice == 'scissors') {
        humanScore++;
        return alert ("You win " + humanChoice + " beats " + computerChoice + "!");
    }
    else if (humanChoice == "scissors" && computerChoice == "rock") {
        computerScore++;
        return alert("You lose " + computerChoice + " beats " + humanChoice + "!");
    }
    else if (humanChoice == "paper" && computerChoice == "rock"){
        humanScore++;
        return alert("You win " + humanChoice + " beats " + computerChoice + "!");
    }
    else if (computerChoice == "paper" && humanChoice == "rock") {
        computerScore++;
        return alert("You lose " + computerChoice + " beats " + humanChoice + "!");
    }
    else if (humanChoice == "scissors " && computerChoice == " paper"){
        humanScore++;
        return alert("You win " + humanChoice + " beats " + computerChoice + "!");
    }
    else if (computerChoice == "scissors" && humanChoice == "paper"){
        computerScore++;
        return alert("You lose " + computerChoice + " beats " + humanChoice + "!");
    }
}
    return playRound(humanSelection, computerSelection);
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice(getRandomChoice());

console.log(humanSelection);
console.log(computerSelection);

console.log(playGame());;
    alert("Human: " + humanScore + " \nComputer:" + computerScore);
console.log("Human: " + humanScore + " \nComputer: " + computerScore);





