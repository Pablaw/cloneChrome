const title = document.createElement("h1");
title.innerText = "Hello!";
document.body.appendChild(title);

const colors = ["#1BB48F", "#318CCF", "#DE574B", "#975FB0"];

const superEventHandler = {
  mouseEnter: function () {
    title.innerText = "The mouse is here!";
    title.style.color = colors[0];
  },
  mouseLeave: function () {
    title.innerText = "The mouse is gone!";
    title.style.color = colors[1];
  },
  rightClick: function (e) {
    e.preventDefault();
    title.innerText = "That was a right click!";
    title.style.color = colors[2];
  },
  resize: function () {
    title.innerText = "You just resized!";
    title.style.color = colors[3];
  }
};

title.addEventListener("mouseenter", superEventHandler.mouseEnter);
title.addEventListener("mouseleave", superEventHandler.mouseLeave);
document.addEventListener("contextmenu", superEventHandler.rightClick);
window.addEventListener("resize", superEventHandler.resize);