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
let playing = true;

const switchPlayer = function () {
    currentScore = 0;
    document.querySelector(`#current--${activePlayer}`).textContent =
        currentScore;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0Element.classList.toggle("player--active");
    player1Element.classList.toggle("player--active");
};

const init = function () {
    scores[0] = 0;
    scores[1] = 0;
    currentScore = 0;
    activePlayer = 0;
    playing = true;

    diceElement.classList.remove("hidden");

    score0Element.textContent = 0;
    score1Element.textContent = 0;

    activePlayer = 0;

    player0Element.classList.remove("player--winner");
    player1Element.classList.remove("player--winner");
    player0Element.classList.add("player--active");
    player1Element.classList.remove("player--active");

    diceElement.src = `dice-6.png`;
};
init();

//Rolling dice functionality
btnRoll.addEventListener("click", function () {
    if (playing) {
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
            switchPlayer();
        }
    }
});

btnHold.addEventListener("click", function () {
    if (playing) {
        // 1. Add current score to active player's score
        scores[activePlayer] += currentScore;
        document.getElementById(`score--${activePlayer}`).textContent =
            scores[activePlayer];

        currentScore = 0;
        document.querySelector(`#current--${activePlayer}`).textContent =
            currentScore;

        // 2. Check if player's score is >= 100
        if (scores[activePlayer] >= 100) {
            playing = false;
            document
                .querySelector(`.player--${activePlayer}`)
                .classList.add("player--winner");
            document
                .querySelector(`.player--${activePlayer}`)
                .classList.remove("player--active");

            diceElement.classList.add("hidden");
        } else {
            switchPlayer();
        }
    }
});

btnNew.addEventListener("click", reset);
