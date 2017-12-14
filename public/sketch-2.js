//title: Sketch 2: Countdown
console.log('sketch-2')

function setup() {
  createCanvas(720,400)

  document.getElementById(`instructions`).textContent = 'Click on the left or right side. This is Combining shapes and making changes'
}

var leftEar = 255
var rightEar = 255

function draw() {
  fill(leftEar)
  ellipse(100,150, 100, 100)
  fill(255)
  fill(rightEar)
  ellipse(300,150, 100, 100)
  fill(255)
  rect(150,150, 100,100)
  fill(0)
  textAlign(CENTER, CENTER)
  text('hello.', 200,200)
}

function mouseClicked(){
  if(mouseX > 200){
    leftEar = 255
  } else {
    leftEar = 0
  }
  if(mouseX < 200){
    rightEar = 255
  } else {
    rightEar = 0
  }
}