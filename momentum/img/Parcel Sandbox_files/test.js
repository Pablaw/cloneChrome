const result = document.getElementById("resultForm");
const limitInput = document.getElementById("limitNumber");
const guessInput = document.getElementById("guessNumber");
const play = document.getElementById("play");
const resultText = document.createElement("div");

function playHandler(event) {
  event.preventDefault();

  const inputValue = limitInput.value;
  const guessValue = Number(guessInput.value);
  let arr = [];

  for (let i = 0; i <= inputValue; i++) {
    arr.push(i);
  }

  const macineValue = Math.floor(Math.random() * arr.length);
  let answer = '';

  if (guessValue === null || macineValue === null) {
        result.classList.add("hidden");
    } else if(guessValue === macineValue) {
    answer = "You win!";
        result.classList.remove("hidden");
    }  
      else {
    answer = "You lost!";
        result.classList.remove("hidden");
    }

  resultText.innerText = `You choose: ${guessValue}, the machine choose: ${macineValue}.
  ${answer}`;

  result.prepend(resultText);
}

play.addEventListener("click", playHandler);


/* Submit Assignment 1
https://codesandbox.io/s/ecstatic-wood-j3h5o?file=/src/index.js */
