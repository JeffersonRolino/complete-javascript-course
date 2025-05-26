"use strict";

// Selecting score elements
const player0Element = document.querySelector(".player--0");
const player1Element = document.querySelector(".player--1");

const score0Element = document.querySelector("#score--0");
const score1Element = document.querySelector("#score--1");

const current0Element = document.querySelector("#current--0");
const current1Element = document.querySelector("#current--1");

const diceElement = document.querySelector(".dice");

//Selecting buttons elements
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");

score0Element.textContent = 0;
score1Element.textContent = 0;

diceElement.classList.add("hidden");

const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;

//Rolling dice functionality
btnRoll.addEventListener("click", function () {
    //1. Generating a random dice roll
    const diceRoll = Math.trunc(Math.random() * 6) + 1;
    console.log(diceRoll);

    //2. Display dice
    diceElement.classList.remove("hidden");
    diceElement.src = `dice-${diceRoll}.png`;

    //3. CHeck for rolled 1: if true, switch to next player
    if (diceRoll !== 1) {
        //Add dice to current score
        currentScore += diceRoll;
        document.querySelector(`#current--${activePlayer}`).textContent =
            currentScore;
    } else {
        //Switch to next player
        currentScore = 0;
        document.querySelector(`#current--${activePlayer}`).textContent =
            currentScore;
        activePlayer = activePlayer === 0 ? 1 : 0;
        player0Element.classList.toggle("player--active");
        player1Element.classList.toggle("player--active");
    }
});
