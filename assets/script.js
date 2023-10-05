var losses = 0;
var wins = 0;
var ties = 0;


var options = ['R', 'P', 'S'];


var playGame = function() {
    // Ask user for their choice
    var userChoice = window.prompt("Enter R, P, or S:");
  
    // If user pressed Cancel, immediately end function
    if (!userChoice) {
      return;
    }
userChoice = userChoice.toUpperCase();
console.log(userChoice);

var computerIndex = Math.floor(Math.random() * options.length);
var computerChoice = options[computerIndex];

console.log(computerChoice);

if (userChoice === computerChoice) {
    ties++

}else if(userChoice === 'P' && computerChoice === 'R'||
userChoice === 'R' && computerChoice === 'S'||
userChoice === 'R' && computerChoice === 'S')
{
    wins++;
    window.alert("You Won!");
}else {
    losses++
    window.alert("You lost!");

}

    





userChoice = userChoice.toUpperCase();

}
playGame();

/** As a user, I want to play Rock, Paper, Scissors against an automated opponent.

* As a user, I can enter R, P, or S to signify my choice of rock, paper, or scissors.

* As a user, I expect the computer to choose R, P, or S in return.

* As a user, I want the option to play again whether I win or lose.

* As a user, I want to see my total wins, ties, and losses after each round.*/