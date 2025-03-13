const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

let img = new Image();
img.src = 'images/cat.jpg';
img.onload = () => {
  ctx.drawImage(img, 0,0,canvas.width,canvas.height);
}


ctx.beginPath();
ctx.ellipse(250, 230, 150, 170, 0, 0, 2 * Math.PI);
ctx.clip();


