const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

ctx.beginPath();
ctx.moveTo(100, 100);
ctx.lineTo(300,100);
ctx.lineTo(100,300);
ctx.lineTo(200,0);
ctx.lineTo(300,300);
ctx.lineTo(100,100)
ctx.stroke();