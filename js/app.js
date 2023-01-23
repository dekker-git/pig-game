"use strict";

// Selecting elements (score 0, score 1)
const score0 = document.querySelector("#score-0");
//getElementById is just a quicker version of querySelector..
//it doesn't require the #
const score1 = document.getElementById("score-1");
const dice = document.querySelector(".dice");

//set initial scores to 0
score0.textContent = 0;
score1.textContent = 0;

//set dice hidden initially
dice.classList.add("hidden");
