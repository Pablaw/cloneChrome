// #2.10 Recap II (12:52)
// const calculator = {
//     add: function(a, b) {
//         console.log(a + b);
//     },
//     minus: function(a, b) {
//         console.log(a - b)
//     },
//     divide: function(a, b) {
//         console.log(a / b)
//     },
//     powerOf: function(a, b) {
//         console.log(a ** b);
//     }
// }
// calculator.add(4, 2);
// calculator.minus(4, 2);
// calculator.divide(4, 2);
// calculator.powerOf(4, 2);

const title = document.querySelector(".hello");

function superEventHandler () {
  title.innerHTML = "The mouse is here!";
  title.innerHTML = "The mouse is gone!";
  title.innerHTML = "You just resized!";
  if(event.button == 2) {
    title.innerHTML = "That was a right click!"
    }
}

title.addEventListener("mouseenter", superEventHandler);
title.addEventListener("mouseleave", superEventHandler);
window.addEventListener("resize", superEventHandler);
window.addEventListener("mousedown", superEventHandler);