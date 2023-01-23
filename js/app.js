"use strict";

// Selecting elements (score 0, score 1)
const score0 = document.querySelector("#score-0");
let score0banked = document.querySelector("#current-0");
//getElementById is just a quicker version of querySelector..
//it doesn't require the #
const score1 = document.getElementById("score-1");
let score1banked = document.getElementById("current-1");

const dice = document.querySelector(".dice");
const startOver = function () {
  playerTurn = Math.trunc(Math.random() * 2);
  currentScore = 0;
  p1score = 0;
  p2score = 0;
  score1banked.textContent = 0;
  score0banked.textContent = 0;
  score0.textContent = 0;
  score1.textContent = 0;
  dice.classList.add("hidden");
  document.querySelector("#name-1").textContent = "Player 2";
  document.querySelector("#name-0").textContent = "Player 1";
  document.querySelector(".player-1-panel").style.backgroundColor = "white";
  document.querySelector(".player-0-panel").style.backgroundColor = "white";
  rollDice.classList.remove("hidden");
  hold.classList.remove("hidden");
};
//set initial scores to 0
score0.textContent = 0;
score1.textContent = 0;
score0banked.textContent = 0;
score1banked.textContent = 0;
const winnerReset = function () {
  hold.classList.add("hidden");
  rollDice.classList.add("hidden");
  dice.classList.add("hidden");
};

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
    if (p1score >= 100) {
      console.log("player 1 wins!");
      document.querySelector(".player-0-panel").style.backgroundColor =
        "#b1edbb";
      document.querySelector(".player-1-panel").style.backgroundColor =
        "#f38e8e";
      document.querySelector("#name-1").textContent = "Loser!";
      document.querySelector("#name-0").textContent = "Winner!";
      winnerReset();
    } else if (p1score < 100) {
      playerTurn = 1;
      currentScore = 0;
    }
  } else if (playerTurn == 1) {
    p2score += currentScore;
    score1banked.textContent = p2score;
    score1.textContent = 0;
    if (p2score >= 100) {
      console.log("player 2 wins!");
      document.querySelector("#name-1").textContent = "Winner!";
      document.querySelector("#name-0").textContent = "Loser!";
      document.querySelector(".player-1-panel").style.backgroundColor =
        "#b1edbb";
      document.querySelector(".player-0-panel").style.backgroundColor =
        "#f38e8e";
      winnerReset();
    } else if (p2score < 100) {
      playerTurn = 0;
      currentScore = 0;
      playerTurn = 0;
      currentScore = 0;
    }
  }
});

newGame.addEventListener("click", startOver);

// {
//   playerTurn = Math.trunc(Math.random() * 2);
//   score1banked.textContent = 0;
//   score0banked.textContent = 0;
//   score0.textContent = 0;
//   score1.textContent = 0;
//   dice.classList.add("hidden");
// });
