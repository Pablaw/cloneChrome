const input = document.getElementById("inputForm");
const result = document.getElementById("resultForm");
const limitInput = document.getElementById("limitNumber");
const guessInput = document.getElementById("guessNumber");
const play = document.getElementById("play");

console.log(limitInput)
function playHandler(event) {
  event.preventDefault();
  const inputValue = limitInput.value;
  const guessValue = guessInput.value;
  let arr = [];

  for (let i = 0; i <= inputValue; i++) {
    arr.push(i);
  }
  if(guessValue === arr[i]) {
    console.log("true")
} else {
    console.log("false");
}
  result.classList.remove("hidden");
  const resultText = document.createElement("div");
  resultText.innerText = `You choose: , the machine choose: .
  You `;
  result.prepend(resultText);
}

play.addEventListener("click", playHandler);


/* Submit Assignment 1
https://codesandbox.io/s/ecstatic-wood-j3h5o?file=/src/index.js */
