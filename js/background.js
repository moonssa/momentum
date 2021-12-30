const images = ["1.jpg", "2.jpg", "3.jpg", "4.webp"];

chosenImage = images[Math.floor(Math.random()*images.length)];

const bgImage = document.createElement("img");
bgImage.src = `img/${chosenImage}`

console.log(bgImage);

//const background = document.querySelector("#background");
document.body.appendChild(bgImage);


