
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

