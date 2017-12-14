//title: Sketch 7: keyboard controlled drawing by Student
console.log('sketch-7')

var x = 100;
var y = 100;

function setup() {
  createCanvas(512, 512);
  colorMode(HSL)

  background(58,78,80)

  document.getElementById('instructions').textContent = 'Use the arrow keys to move the dot. c is clear'
}

function draw() {
  if (keyIsDown(LEFT_ARROW))
    x-=5;

  if (keyIsDown(RIGHT_ARROW))
    x+=5;

  if (keyIsDown(UP_ARROW))
    y-=5;

  if (keyIsDown(DOWN_ARROW))
    y+=5;

  if (keyIsDown(67)){ // C
    background(58,78,80)
  }

  console.log(keyCode)

  fill(24, 93, 56);
  ellipse(x, y, 50, 50);
}