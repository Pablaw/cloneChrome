const clockTitle = document.querySelector(".js-clock");
const christmas = 365 - 6;

// monthDayArr = {Jan: 31, Feb: 28, Mac: 31, Apr: 30, May: 31, Jun: 30, Jul: 31, Aug: 31, Sep: 30, Oct: 31, Nov: 30, Dec: 31};

const month = new Date().getMonth();
let daySum = 0;
switch (month) {
  case 1:
    daySum = 31;
      break;
  case 2:
    daySum = 59;
      break;
  case 3:
    daySum = 90;
      break;
  case 4:
    daySum = 120;
      break;
  case 5:
    daySum = 151;
      break;
  case 6:
    daySum = 181;
      break;
  case 7:
    daySum = 212;
      break;
  case 8:
    daySum = 243;
      break;
  case 9:
    daySum = 273;
      break;
  case 10:
    daySum = 304;
      break;  
  case 11:
    daySum = 334;
      break;  
}

function displayClock () {
  let restDays = christmas - (daySum + new Date().getDate());
  let restHours = 23 - new Date().getHours();
  let restMinutes = 59 - new Date().getMinutes();
  let restSeconds = 59 - new Date().getSeconds();

  clockTitle.innerHTML = `${restDays}d ${restHours}h ${restMinutes}m ${restSeconds}s`;
}

displayClock();
setInterval(displayClock, 1000);

/* Submit Assignment 1
https://codesandbox.io/s/ecstatic-wood-j3h5o?file=/src/index.js */

/* Submit Assignment 2
https://codesandbox.io/s/beautiful-keller-zk292?file=/src/index.js */

/* Submit Assignment 3
https://codesandbox.io/s/dreamy-glitter-pu3xd?file=/src/index.js */

/* Submit Assignment 4
https://codesandbox.io/s/a08blueprint-forked-2ezmv?file=/src/index.js */

/* Submit Assignment 5
https://codesandbox.io/s/a09blueprint-forked-t99dp?file=/src/index.js */