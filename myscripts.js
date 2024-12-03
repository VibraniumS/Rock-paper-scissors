
function getComputerChoice() {
    return Math.floor(Math.random() * 12 + 1);
}

const choice = getComputerChoice();

if (choice >= 9) {
    console.log("rock"); 
}   else if  (choice >= 5) {
    console.log("paper");
}   else { 
    console.log("scissors");
}


let pick = prompt("Pick rock, paper, or scissors?")

function getHumanChoice(pick) {
    
}


if (pick === "rock") {
    console.log("rock");
}   else if (pick === "paper") {
    console.log("paper");
}   else  {
   (pick === "scissors")
    console.log("scissors");
}


