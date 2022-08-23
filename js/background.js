const images = [
    "hugme_1.jpg","hugme_2.jpg","hugme_3.jpg"
];
const chosen_Image = images[Math.floor(Math.random() * images.length)];

const BG_Image = document.createElement("img");

BG_Image.src = `img/${chosen_Image}`;

document.body.appendChild(BG_Image);