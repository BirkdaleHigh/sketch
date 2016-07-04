//title: Sketch 4: Countdown by Student
console.log('sketch-4')

var canvas
var countdown = 10000 // milliseconds to count down.
// To test, this starts from 70 seconds so whe get to handle the minutes transition.

function setup() {
  canvas = createCanvas(400,400)
  colorMode(HSB, 100)
  textSize(96)
  textAlign(CENTER, CENTER)
}

function draw() {
  var time = x = Math.round((countdown - millis())/1000)  
  background(time, 100, 100)
  fill(0, 0, 0)
  strokeWeight(10)
  stroke(0,0,100)
  text(time, width / 2 , height / 2)
}