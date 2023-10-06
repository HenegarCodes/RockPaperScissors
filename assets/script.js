$(document).ready(function () {

var losses = 0;
var wins = 0;
var ties = 0;


var options = ['R', 'P', 'S'];


var playGame = function() {
    // Ask user for their choice
    var userChoice = window.prompt("Play Rock, Paper, Scissors:    Enter R, P, or S:");
  
    // If user pressed Cancel, immediately end function
    if (!userChoice) {
      return;
    }
userChoice = userChoice.toUpperCase();
console.log(userChoice);

var computerIndex = Math.floor(Math.random() * options.length);
var computerChoice = options[computerIndex];

window.alert("computer chose randomly:  " + computerChoice);

console.log(computerChoice);

if (userChoice === computerChoice) {
    window.alert("You tied the computer");
    ties++

}else if(userChoice === 'P' && computerChoice === 'R'||
userChoice === 'R' && computerChoice === 'S'||
userChoice === 'R' && computerChoice === 'S')
{
    wins++;
    window.alert("You beat the computer! ");
}else {
    losses++
    window.alert("You lost to the computer! ");

}
window.alert("Stats: wins: " + wins + " losses: " + losses + " Ties: " + ties);




userChoice = userChoice.toUpperCase();

var playGameAgain = window.confirm('Play again?') 

if (playGameAgain){
    playGame();
}
}



playGame();

});

/** As a user, I want to play Rock, Paper, Scissors against an automated opponent.

* As a user, I can enter R, P, or S to signify my choice of rock, paper, or scissors.

* As a user, I expect the computer to choose R, P, or S in return.

* As a user, I want the option to play again whether I win or lose.

* As a user, I want to see my total wins, ties, and losses after each round.*/