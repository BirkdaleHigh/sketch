//title: Sketch 3: Countdown
console.log('sketch-3')

var countdown = 70000 // milliseconds to count down.
// To test, this starts from 70 seconds so whe get to handle the minutes transition.

function setup() {
  createCanvas(720,400)
  colorMode(HSL)

  document.getElementById(`instructions`).textContent = 'Values that change with code. This is the beginnings of a stopwatch'
}

function draw() {
  background(0, 0, 85)
  var time = countdown - millis()
  fill(240, 80, 70)
  textSize(50)
  text(time, width / 2 , height / 2)
}