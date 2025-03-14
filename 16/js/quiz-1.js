const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

function rect(x, y, w, h, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, w, h);
}

for (let i = 0; i < 2; i++) {
    const x = Math.random() * canvas.width;
    const y = Math.random() * canvas.height;
    const w = Math.random() * 100 + 100;
    const h = w;
    const color = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
    rect(x, y, w, h, color);
}
