"use strict";

const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 10;

document.querySelector(".number").textContent = secretNumber;
const message = document.querySelector(".message");
const scoreElement = document.querySelector(".score");

document.querySelector(".check").addEventListener("click", function () {
    const guess = Number(document.querySelector(".guess").value);
    console.log(guess, typeof guess);

    if (!guess) {
        message.textContent = "No number!";
    } else if (guess === secretNumber) {
        message.textContent = "Correct Number!";
    } else if (guess > secretNumber) {
        if (score > 1) {
            score--;
            scoreElement.textContent = score;
            message.textContent = "Too high!";
        } else {
            score = 0;
            scoreElement.textContent = score;
            message.textContent = "Game Over!";
        }
    } else if (guess < secretNumber) {
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
