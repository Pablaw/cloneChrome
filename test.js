const title = document.createElement("h1");
title.innerText = "Hello!";
title.style.color = "white";
document.body.prepend(title);

function resizeHandler() {
  const width = window.outerWidth;
  if (width > 1000) {
    document.body.style.backgroundColor = "#FDB73D";
  } else if (width > 800) {
    document.body.style.backgroundColor = "#9555A7";
  } else {
    document.body.style.backgroundColor = "#0094D2";
  }
}

window.addEventListener("resize", resizeHandler);


/* Submit Assignment 1
https://codesandbox.io/s/ecstatic-wood-j3h5o?file=/src/index.js */
