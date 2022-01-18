const inputForm = document.getElementById("input-Form");
const result = document.getElementById("resultForm");
const limitInput = document.getElementById("limitNumber");
const guessInput = document.getElementById("guessNumber");
const play = document.getElementById("play");
const resultText = document.createElement("div");

function playHandler(event) {
  event.preventDefault();
  const inputValue = limitInput.value;
  const guessValue = Number(guessInput.value);
  let numberArr = [];

  for (let i = 0; i <= inputValue; i++) {
    numberArr.push(i);
  }

  const macineValue = Math.floor(Math.random() * numberArr.length);
  let answer = '';

  const RESULTSTRING = `You choose: ${guessValue}, the machine choose: ${macineValue}.`;
  const CLASSHIDDEN = result.classList.remove("hidden");

    if(guessValue === macineValue) {
        answer = "You win!";
        resultText.innerText = `${RESULTSTRING}
        ${answer}`;
        CLASSHIDDEN;
    } else {
        answer = "You lost!";
        resultText.innerText = `${RESULTSTRING}
        ${answer}`;
        CLASSHIDDEN;
    }
  result.prepend(resultText);
}

inputForm.addEventListener("submit", playHandler);


/* Submit Assignment 1
https://codesandbox.io/s/ecstatic-wood-j3h5o?file=/src/index.js */
