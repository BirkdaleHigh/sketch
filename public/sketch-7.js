//title: Sketch 7: keyboard controlled drawing by Student
console.log('sketch-7')

var x = 100;
var y = 100;
var barWidth = 0.5;
var barlength = 0.5;
var earlybar = 0;
var col = 10

function setup() {
  createCanvas(512, 512);
  colorMode(HSB, 95)
  
    background(20,90,90)
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
    background(20,90,90)
  }
  
  console.log(keyCode)
  
  fill(255, 0, 0);
  ellipse(x, y, 50, 50);
}