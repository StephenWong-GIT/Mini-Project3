// WRITE YOUR CODE HERE //

var userChoice = prompt("What will you choose? Rock, Paper or Scissors?");

var computerChoice = Math.random();
console.log(computerChoice);

if (computerChoice <= 0.33) {
    "Rock";
} else if (computerChoice <= 0.66) {
    "Paper";
} else {
    "Scissors";
}

var compare = function(choice1, choice2) {
    if (choice1 === choice2) {
        return "The result is a tie!";
    }
    if (choice1 === "Rock") {
        if (choice2 === "Scissors") {
            return "Rock wins";
        } else {
            return "Paper wins";
        }
    }
    if (choice1 === "Paper") {
        if (choice2 === "Rock") {
            return "Paper wins";
        } else {
            if (choice2 === "Scissors") {
                return "Scissors wins";
            }
        }
        if (choice1 === "Sscissors") {
            if (choice2 === "Rock") {
                return "Rock wins";
            } else {
                if (choice2 === "Paper") {
                    return "Scissors wins";
                }
            }
        }
    }
};
console.log("User Choice: " + userChoice);
console.log("Computer Choice: " + computerChoice);
compare(userChoice, computerChoice);