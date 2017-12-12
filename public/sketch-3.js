//title: Sketch 3: Countdown
console.log('sketch-3')

var canvas
var countdown = 70000 // milliseconds to count down.
// To test, this starts from 70 seconds so whe get to handle the minutes transition.

function setup() {
  canvas = createCanvas(400,400)

  document.getElementById(`instructions`).textContent = 'Programatic values'
}

function draw() {
  background(255, 255, 255)
  var time = countdown - millis()
  fill(0, 0, 77)
  text(time, width / 2 , height / 2)
}