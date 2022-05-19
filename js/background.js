const images = ["0.jpg", "1.jpg", "2.jpg"];
const todaysImages = images[Math.floor(Math.random() * images.length)];
const bgImage = document.createElement("img");
console.log(bgImage);
bgImage.src = `img/${todaysImages}`;
document.body.appendChild(bgImage);
