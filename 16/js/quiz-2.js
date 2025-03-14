const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");



function Rect(x, y, width, height, color, dx, dy) {
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.width = width;
  this.height = height;
  this.color = color;

  this.draw = function() {
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.width, this.height);    
  }
  this.animate = function() {
    this.x += this.dx;
    this.y += this.dy;
    if (this.x + this.width > canvas.width || this.x < 0) {
      this.dx = -this.dx;
    }
    if (this.y + this.height > canvas.height || this.y < 0) {
      this.dy = -this.dy;
    }
    this.draw();
  }
}

const box1 = new Rect(10, 10, 100, 100, "red", Math.random() * 10 + 1, Math.random() * 10 + 1);
const box2 = new Rect(30, 30, 60, 60, "blue", Math.random() * 10 + 1, Math.random() * 10 + 1);

function move() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  box1.animate();
  box2.animate();
  requestAnimationFrame(move);
}
move();
