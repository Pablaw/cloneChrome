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

/* const title = document.querySelector("h2");
const colors = ["#01DFD7", ]
const superEventHandler = {
  handleMouseEnter:
  function () {
  title.innerText = "The mouse is here!";
  title.style.color = colors[0];
  },
  handleMouseLeave: 
  function () {
    title.innerText = "The mouse is gone!";
  },
  handleWindowResize:
  function () {
    title.innerText = "You just resized!";
  },
  handleRightClick: 
  function () {
    if(event.button == 2) {
    title.innerText = "That was a right click!";
    }
  }
};


title.addEventListener("mouseenter", superEventHandler.handleMouseEnter);
title.addEventListener("mouseleave", superEventHandler.handleMouseLeave);
window.addEventListener("resize", superEventHandler.handleWindowResize);
window.addEventListener("mousedown", superEventHandler.handleRightClick); */

const loginForm = document.getElementById("login-form");
const loginInput = loginForm.querySelector("input");
const greeting = document.getElementById("greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "user_name";

function onLoginSubmit(event) {
  event.preventDefault();
  const userName = loginInput.value;
  loginForm.classList.add(HIDDEN_CLASSNAME);
  localStorage.setItem(USERNAME_KEY, userName);
  paintGreeting(userName);
}

function paintGreeting(username) {
  greeting.innerText = `Hello ${username}`;
  greeting.classList.toggle(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if( savedUsername === null ) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  loginForm.classList.add(HIDDEN_CLASSNAME);
  greeting.innerText = `Hello ${savedUsername}`;
  greeting.classList.toggle(HIDDEN_CLASSNAME);
}