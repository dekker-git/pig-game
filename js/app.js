"use strict";

// Selecting elements (score 0, score 1)
const score0 = document.querySelector("#score-0");
let score0banked = document.querySelector("#current-0");
//getElementById is just a quicker version of querySelector..
//it doesn't require the #
const score1 = document.getElementById("score-1");
let score1banked = document.getElementById("current-1");

const dice = document.querySelector(".dice");

//set initial scores to 0
score0.textContent = 0;
score1.textContent = 0;
score0banked.textContent = 0;
score1banked.textContent = 0;

let currentScore = 0;
let p1score = 0;
let p2score = 0;
//set dice hidden initially
dice.classList.add("hidden");

const rollDice = document.querySelector(".btn-roll");
const hold = document.querySelector(".btn-hold");
const newGame = document.querySelector(".btn-new");
let playerTurn = Math.trunc(Math.random() * 2);

rollDice.addEventListener("click", function () {
  // 1. generating a random dice roll.
  const diceRoll = Math.trunc(Math.random() * 6) + 1;
  // 2. display dice roll
  dice.classList.remove("hidden");
  dice.src = `img/dice-${diceRoll}.png`;

  if (diceRoll !== 1 && playerTurn == 0) {
    currentScore += diceRoll;
    score0.textContent = currentScore;
  } else if (diceRoll !== 1 && playerTurn == 1) {
    currentScore += diceRoll;
    score1.textContent = currentScore;
  } else if (diceRoll === 1 && playerTurn == 0) {
    playerTurn = 1;
    currentScore = 0;
    score0.textContent = 0;
  } else if (diceRoll === 1 && playerTurn == 1) {
    playerTurn = 0;
    currentScore = 0;
    score1.textContent = 0;
  }
});

///

hold.addEventListener("click", function () {
  if (playerTurn == 0) {
    p1score += currentScore;
    score0banked.textContent = p1score;
    score0.textContent = 0;
    playerTurn = 1;
    currentScore = 0;
  } else {
    p2score += currentScore;
    score1banked.textContent = p2score;
    score1.textContent = 0;
    playerTurn = 0;
    currentScore = 0;
  }
});

newGame.addEventListener("click", function () {
  playerTurn = Math.trunc(Math.random() * 2);
  score1banked.textContent = 0;
  score0banked.textContent = 0;
  score0.textContent = 0;
  score1.textContent = 0;
  dice.classList.add("hidden");
});

if (p1score >= 100) {
  document.querySelector(".player1-panel").backgroundColor = red;
} else if (p2score >= 100) {
}
