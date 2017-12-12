//title: Sketch 1: Countdown
console.log('sketch-1')

var canvas

function setup() {
  canvas = createCanvas(400,400)

  document.getElementById(`instructions`).textContent = 'Drawing a basic shape'
}

function draw() {
  triangle(30, 75, 60, 20, 90, 75)
}