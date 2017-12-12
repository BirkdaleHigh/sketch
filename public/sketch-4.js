//title: Sketch 3: Countdown
console.log('sketch-3')

var canvas
var countdown = 15000 // milliseconds to count down.
var starttime = 0
// To test, this starts from 70 seconds so whe get to handle the minutes transition.

function setup() {
  canvas = createCanvas(400,400)
  colorMode(HSL)

  document.getElementById(`instructions`).textContent = 'Count down and change the background colour in the last 10 seconds.'
}

function draw() {
  if (true) {
    background(143, 90, 40)
    var time = x = Math.round((countdown + starttime - millis())/1000)
    if (time < 11) {
      background(time * 13, 90, 40)
    }
    fill(0, 0, 77)
  }
  if (time > -1) {
    fill(0, 0, 0);
    textSize(30);
    text(time, width / 2 , height / 2)
  }
}
function mousePressed() {
  if (millis() !== 0)  {
    time = time + countdown ;
  }
}


