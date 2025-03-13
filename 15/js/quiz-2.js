const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.font = "bold 300px sans-serif";
ctx.fillText("GOOD", 100, 320);

ctx.globalCompositeOperation = "source-in";

let img = new Image();
img.src = "images/text-bg.jpg";
img.onload = () => {
  ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
};
