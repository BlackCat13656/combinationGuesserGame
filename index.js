"use strict";

const gameArea = document.querySelector(".game");
const button = document.querySelector("button");
let gamePlay = false;

button.addEventListener("click", () => {
  if (!gamePlay) {
    gamePlay = true;
    maker();
    button.innerHTML = "Check Combo";
  } else {
    console.log("checker");
  }
});

function maker() {
  for (let x = 0; x < 6; x++) {
    let el = document.createElement("input");
    el.setAttribute("type", "number");
    el.max = 9;
    el.min = 0;
    el.size = 1;
    el.style.width = "50px";
    el.classList.add("numb");
    el.value = 0;
    el.order = 0;
    console.log(el);
    gameArea.appendChild(el);
  }
}
