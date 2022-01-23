/* const images = [
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "lake.jpg",
    "lake_cow.jpg",
    "river.jpg",
    "winter.jpg"
];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage); // appendChild() => end < > prependChild() */

const colors = [
    "#ef5777",
    "#575fcf",
    "#4bcffa",
    "#34e7e4",
    "#0be881",
    "#f53b57",
    "#3c40c6",
    "#0fbcf9",
    "#00d8d6",
    "#05c46b",
    "#ffc048",
    "#ffdd59",
    "#ff5e57",
    "#d2dae2",
    "#485460",
    "#ffa801",
    "#ffd32a",
    "#ff3f34"
  ];
  
  
  function changeColors() {
    const colorOne = colors[Math.floor(Math.random() * colors.length)];
    const colorTwo = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.background = `linear-Gradient(to right, ${colorOne}, ${colorTwo})`;
    document.body.classList.toggle("change");
    
  }
  
  changeColors();
setInterval(changeColors, 5000);
  