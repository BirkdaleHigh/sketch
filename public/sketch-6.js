// title: Sketch 6
console.log('sketch-6')

var barWidth = 0.5;
var earlybar = 0;
var col = 10;

function setup() {
  createCanvas(720, 400);
  colorMode(HSL);
  background(0, 0, 0);
  noStroke();

  document.getElementById('instructions').textContent = 'Click and drag the mouse to paint colours'
}

function draw() {
  // We're not drawing every frame, so we don't need anything here
}

function mouseDragged() {
  // This runs only whilst the mouse is pressed AND moved. See reference: Events
  if (col > 360){ // Check if the color is at the end of the colour wheel to reset the value.
    col = 0
  }
  fill(col, 100, 50);                // Set a colour based on the increasing colour postion around the wheel
  ellipse(mouseX, mouseY, 20, 20);   // Draw a circle around the current mouse location
  col = col + 3                      // Increment the color by some amount so it's different next time
}
