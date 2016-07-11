//title: Sketch 4: Countdown by Student
console.log('sketch-4')

var canvas
var countdown = 150000 // milliseconds to count down.
var starttime = 0
// To test, this starts from 70 seconds so whe get to handle the minutes transition.

function setup() {
  canvas = createCanvas(400,400)
  colorMode(HSB, 95)
}

function draw() {
  if (true) {
    background(32, 100, 100)
    var time = x = Math.round((countdown + starttime - millis())/1000)
    if (time < 11) {
      background(time, 100, 100)
      }
    fill(0, 0, 77)
    }
    if (time > -1) {
      colorMode(HSB);
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
  

  