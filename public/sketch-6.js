//title: Sketch 6: Rainbow edited by Student
console.log('sketch-6')

var barWidth = 0.5;
var barlength = 0.5;
var earlybar = 0;
var col = 10

function setup() {
  createCanvas(972, 540);
  colorMode(HSB, 255, 255, 255);  
  noStroke();
  background(0, 0, 0);

  document.getElementById('instructions').textContent = 'Move the mouse to draw colours, click to stop and start.'
}

function draw() {
  if (keyIsDown(UP_ARROW)) {
    fill(255, 100, 0);             //to fill the circle to a a colour based on pos in the Y-axis  
    ellipse(barX, mouseY, 20, 20);    //barx is on x axis, 0 is bottom on y axis, barwidth is the width of rectangle, height as in y axis max
  }
  if (col > 255)
    col = col - 255
    var whichBar = mouseX / barWidth;     //works out which bar you`re at
  if (true) {           //if the bar is not the last pressed then run the below loop
    col = col + 3
    console.log(height)
    var barX = whichBar * barWidth;     //
    fill(col, 255, 255);             //to fill the bar to a a colour based on pos in the Y-axis  
    ellipse(barX, mouseY, 20, 20);    //barx is on x axis, 0 is bottom on y axis, barwidth is the width of rectangle, height as in y axis max
    earlybar = whichBar
  }
}
function mouseReleased() {
  noLoop();
}

function mousePressed()  {
  loop();
}