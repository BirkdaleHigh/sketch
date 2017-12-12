//title: Sketch 8: Beginnings of a snake game.
console.log('sketch-8')

var x = 100;
var y = 100;
var col = 5;

var pallet = {}
var list = []

function setup() {
  // Colours
  colorMode(HSL) // HSL is easier to use, get them with the browsers colour picker.
  pallet.dark  = color(23,22,27)
  pallet.dust  = color(0,0,0)
  pallet.green = color(159,39,55)

  createCanvas(512, 512);

  background(pallet.dust)

  document.getElementById(`instructions`).textContent = 'Use the arrow keys! Same as 9 but programmed differently by creating new objects'
}

var last = {'num': 0,'x': 0, 'y': 0}

function getSegment(count){
  var num = count + 1
  var c = {
    'num': num,
    'x': x,
    'y': y,
    'col': color( (num * 6), 150, 56)
  }

  return c
}

function draw() {
  background(pallet.dust)
  fill(255, 0, 0);
  col = col + 5

  if (col > 360){
    col = col - 360
  }

  if (keyIsDown(LEFT_ARROW) && x > 0){
    x -= 5
  }

  if (keyIsDown(RIGHT_ARROW) && x < width){
    x += 5
  }

  if (keyIsDown(UP_ARROW) && y > 0){
    y -= 5
  }

  if (keyIsDown(DOWN_ARROW) && y < height){
    y += 5
  }

  if( (last.x !== x) || (last.y !== y) ){
    var snakeSegment = getSegment(last.num % 61)
    if(list.length < 60){
      list.push(snakeSegment)
    } else {
      list.shift()
      list.push(snakeSegment)
    }
    last.num = snakeSegment.num
    last.x = snakeSegment.x
    last.y = snakeSegment.y
    console.log(last.num)
  }

  list.forEach(function(c, i, a){
    if(i === (a.length -1)){ // Only paint a boarder around the head of the snake.
      stroke(0, 102, 0)
    } else {
      noStroke()
    }
    // Set the opacity relative to the position in the array
    c.col._array[3] = map(i, 0, a.length, .2, 1)
    fill(c.col)

    ellipse(c.x, c.y ,20, 20)
  })


}