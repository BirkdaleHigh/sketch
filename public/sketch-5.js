//title: Sketch 5: Rainbow from example commented by Student
console.log('sketch-5')

var barWidth = 20;
var earlybar = 0;

function setup() {
  createCanvas(720, 400);
  console.log(height)
  colorMode(HSL, height, 100, 100); // Setting the color mode range saves us writing maths to convert mouseY and canvas height relative to 360 degrees on the colour wheel.
  noStroke();
  background(0, 0, 0);

  document.getElementById('instructions').textContent = 'Slide the mouse left and right. Can you work out which value is effecting the colour?'
}

function draw() {
  if (mouseY > 0 && mouseY < height) {   // Check the mouse up/down is inside the canvas to draw.
    if(mouseX > 0 && mouseX < width) {   // Check the mouse left/right is inside the canvas to draw.
      var barX = mouseX - barWidth / 2;  // Subtract half the bar width from the mouse location put the bar around the centre of the mouse point
      fill(mouseY, 70, 55);            // to fill the bar colour based on position in the Y-axis
      rect(barX, 0, barWidth, height);   // barx is on x axis, 0 is bottom on y axis, barwidth is the width of rectangle, height as in y axis max
    }
  }
}