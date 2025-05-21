"use strict";

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 10;
let highscore = 0;

const message = document.querySelector(".message");
const scoreElement = document.querySelector(".score");
const resetBtn = document.querySelector(".again");
const guessInput = document.querySelector(".guess");
const highscoreElement = document.querySelector(".highscore");

document.querySelector(".check").addEventListener("click", function () {
    const guess = Number(guessInput.value);
    console.log(guess, typeof guess);

    if (!guess) {
        message.textContent = "No number!";
    }
    //When the player wins...
    else if (guess === secretNumber) {
        message.textContent = "Correct Number!";
        document.querySelector(".number").textContent = secretNumber;

        document.querySelector("body").style.backgroundColor = "#60b347";
        document.querySelector(".number").style.width = "30rem";

        if (score > highscore) {
            highscore = score;
            highscoreElement.textContent = highscore;
        }
    }
    //When the number is higher
    else if (guess > secretNumber) {
        if (score > 1) {
            score--;
            scoreElement.textContent = score;
            message.textContent = "Too high!";
        } else {
            score = 0;
            scoreElement.textContent = score;
            message.textContent = "Game Over!";
        }
    }
    //When the number is lower
    else if (guess < secretNumber) {
        if (score > 1) {
            score--;
            scoreElement.textContent = score;
            message.textContent = "Too low!";
        } else {
            score = 0;
            scoreElement.textContent = score;
            message.textContent = "Game Over!";
        }
    }
});

resetBtn.addEventListener("click", () => {
    //Reset State (score and secret number)
    score = 10;
    secretNumber = Math.trunc(Math.random() * 20) + 1;

    //Reset GUI
    scoreElement.textContent = score;
    document.querySelector(".number").textContent = "?";
    message.textContent = "Start guessing...";
    guessInput.value = "";

    //Reset Styles
    document.querySelector("body").style.backgroundColor = "#222";
    document.querySelector(".number").style.width = "15rem";
});
