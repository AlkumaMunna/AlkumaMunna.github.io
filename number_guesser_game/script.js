let correcr_ans = getRandomInt(1, 11)
// console.log(`Correct answer is ${correcr_ans}`)

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return (Math.floor(Math.random() * (max - min) + min));
}

function guessNumber() {
    for (i = 0; i < 3; i++) {
        let userGuess = parseInt(prompt(`
        Guess a number between 1 to 10
        Chance Left ${3 - i}`));

        if (userGuess < correcr_ans && i < 2) {
            alert("Correct answer is greater!");
        }
        else if (userGuess > correcr_ans && i < 2) {
            alert("Correct answer is smaller!");
        }

        else if (userGuess == correcr_ans) {
            alert("You Win");
            break;
        }

        else {
            alert("You lose!");
            break;
        }
    }
}

guessNumber();








