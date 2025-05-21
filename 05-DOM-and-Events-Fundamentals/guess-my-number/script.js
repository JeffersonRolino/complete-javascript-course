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
    }
    //When the player wins...
    else if (guess === secretNumber) {
        message.textContent = "Correct Number!";

        document.querySelector("body").style.backgroundColor = "#60b347";
        document.querySelector(".number").style.width = "30rem";
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
