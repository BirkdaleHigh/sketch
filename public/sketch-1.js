//title: Sketch 1: Countdown
console.log('sketch-1')

function setup() {
  createCanvas(720,400)

  document.getElementById(`instructions`).textContent = 'Draw a basic shape'
}

function draw() {
  triangle(30, 75, 60, 20, 90, 75)
}
