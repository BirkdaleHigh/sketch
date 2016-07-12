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
  
  if (keyIsDown(LEFT_ARROW)){
    x -= 5
  }

  if (keyIsDown(RIGHT_ARROW)){
    x += 5
  }

  if (keyIsDown(UP_ARROW)){
    y -= 5
  }

  if (keyIsDown(DOWN_ARROW)){
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

  list.forEach(function(c){
    ellipse(c.x, c.y ,5, 5)
  })

  last.x = circle.x
  last.y = circle.y
}