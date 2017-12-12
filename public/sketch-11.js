var left, right;

function setup() {
  colorMode(HSL);
  createCanvas(720, 400);
  noStroke();
  left = new Eye(180, 160, 150);
  right = new Eye(530, 160, 150);

  document.getElementById(`instructions`).textContent = 'Watching your mouse!'
}

function draw() {
  fill(217, 10, 25);
  rect(0, 0, width, height, 40)
  left.update(mouseX, mouseY);
  right.update(mouseX, mouseY);
  left.display();
  right.display();
}

function Eye(tx, ty, ts) {
  this.x = tx;
  this.y = ty;
  this.size = ts;
  this.angle = 0;

  this.update = function (mx, my) {
    this.angle = atan2(my - this.y, mx - this.x);
  };

  this.display = function () {
    push();
    translate(this.x, this.y);
    fill(0, 0, 95);
    ellipse(0, 0, this.size, this.size);
    rotate(this.angle);
    fill(26, 100, 49);
    ellipse(this.size / 4, 0, this.size / 2, this.size / 2);
    pop();
  };
}