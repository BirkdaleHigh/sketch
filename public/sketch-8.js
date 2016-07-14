//title: Sketch 8: Beginnings of a snake game.
console.log('sketch-8')

var x = 100;
var y = 100;

var pallet = {}
var list = []

function setup() {
  // Colours
  colorMode(HSL) // HSL is easier to use, get them with the browsers colour picker.
  pallet.dark  = color(23,22,27)
  pallet.dust  = color(58,78,80)
  pallet.green = color(159,39,55)

  createCanvas(512, 512);
  
  background(pallet.dust)
}

var last = {'x': 0, 'y': 0}

function draw() {
  background(pallet.dust)
  fill(255, 0, 0);
  
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

  var circle = {'x': x, 'y': y}
  if( (last.x !== x) || (last.y !== y) ){
    if(list.length < 40){
      list.push(circle)
    } else {
      list.shift()
      list.push(circle)
    }
  }

  list.forEach(function(c, i, a){
    if(i === (a.length -1)){ // Only paint a boarder around the head of the snake.
      stroke(pallet.dark)
    } else {
      noStroke()
    }
    // Set the opacity relative to the position in the array
    pallet.green._array[3] = map(i, 0, a.length, .2, 1)
    fill(pallet.green)

    ellipse(c.x, c.y ,15, 15)
  })

  last.x = circle.x
  last.y = circle.y
}