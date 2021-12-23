
/* const limitNumber = document.querySelector("#limit-number");
const guessNumber = document.querySelector("#guess-number");
const submit = document.querySelector("#submit");
const divText = document.querySelector("#text");
const answerText = document.querySelector("#answer-text");

function getRandomInt(min, max) {
    let answer = Math.floor(Math.random(min, max) * max);
    return answer;
}

function btnClick(event) {
    event.preventDefault();
        divText.innerHTML = `You chose: ${guessNumber.value}, the machine chose: ${getRandomInt(0, limitNumber.value)}`
        console.log(guessNumber.value);
        console.log(getRandomInt(0, limitNumber.value));

    if(Number(guessNumber.value) == Number(getRandomInt(0, limitNumber.value))) {
            answerText.innerHTML = 'You won!';
    } else {
        answerText.innerHTML = 'You lost!';
    }
}

submit.addEventListener("click", btnClick); */

/* const dateClock = document.querySelector("h2#dateClock");

function countClock() {
const date = new Date();

const day = String(24-date.getDate());
const hours = String(23-date.getHours()).padStart(2, "0");
const minutes = String(60-date.getMinutes()).padStart(2, "0");
const seconds = String(60-date.getSeconds()).padStart(2, "0");

dateClock.innerText = `${day}d ${hours}h ${minutes}m ${seconds}s`;
}

countClock();
setInterval(countClock, 1000); */

const blueprint = [
    "#88e9b8",
    "#c2b0e2",
    "#86e98f",
    "#ae90e2",
    "#1a806b",
    "#FF6633",
    "#FFB399",
    "#FF33FF",
    "#FFFF99",
    "#00B3E6",
    "#E6B333",
    "#3366E6",
    "#999966",
    "#99FF99",
    "#B34D4D",
    "#80B300",
    "#809900",
    "#E6B3B3",
    "#6680B3",
    "#66991A",
    "#FF99E6",
    "#CCFF1A",
    "#FF1A66",
    "#E6331A",
    "#33FFCC",
    "#66994D",
    "#B366CC",
    "#4D8000",
    "#B33300",
    "#CC80CC",
    "#66664D",
    "#991AFF",
    "#E666FF",
    "#4DB3FF",
    "#1AB399",
    "#E666B3",
    "#33991A",
    "#CC9999",
    "#B3B31A",
    "#00E680",
    "#4D8066",
    "#809980",
    "#E6FF80",
    "#1AFF33",
    "#999933",
    "#FF3380",
    "#CCCC00",
    "#66E64D",
    "#4D80CC",
    "#9900B3",
    "#E64D66",
    "#4DB380",
    "#FF4D4D",
    "#99E6E6",
    "#6666FF"
  ];
  
  const changeBtn = document.querySelector("#changeBtn");
  const style = document.querySelector("body style");
  const bgColor = document.createElement("style");
  document.body.appendChild(bgColor);

  function changeColors() {
    const selectColorOne = `${blueprint[Math.floor(Math.random() * blueprint.length)]}`;
    const selectColorTwo = `${blueprint[Math.floor(Math.random() * blueprint.length)]}`;
    bgColor.innerHTML = `body {
      background: linear-gradient(to right, ${selectColorOne}, ${selectColorTwo})`;
  }
  changeColors();
  changeBtn.addEventListener("click", changeColors);