//title: Sketch 6: Rainbow edited by Student
console.log('sketch-6')
var barWidth = 20;
var earlybar = 0;

function setup() {
  createCanvas(720, 400);
  colorMode(HSB, height, 255, 255);  
  noStroke();
  background(100, 400, 52);
}

function draw() {
  var whichBar = mouseX / barWidth;     //works out which bar you`re at
  if (whichBar !== earlybar) {           //if the bar is not the last pressed then run the below loop
    console.log(height)
    var barX = whichBar * barWidth;     //
    fill(mouseY, 255, 255);             //to fill the bar to a a colour based on pos in the Y-axis  
    ellipse(barX, mouseY, barWidth, 20);    //barx is on x axis, 0 is bottom on y axis, barwidth is the width of rectangle, height as in y axis max
    earlybar = whichBar;                //
  }
}