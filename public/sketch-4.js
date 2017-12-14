//title: Sketch 4: Countdown
console.log('sketch-4')

var countdown = 15000 // milliseconds to count down.
var starttime = 0
// TODO: When counting from over a minute reformat the seconds to show minutes and seconds.

function setup() {
  createCanvas(720,400)
  colorMode(HSL)

  document.getElementById(`instructions`).textContent = 'Count down and change the background colour in the last 10 seconds. Stopwatch version 2'
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
    fill(0, 0, 100);
    textSize(30);
    text(time, width / 2 -7 , height / 2 + 15) // Write text, centered on the screen, and offset for the text size.
  }
}
function mousePressed() {
  if (millis() !== 0)  {
    time = time + countdown ;
  }
}


