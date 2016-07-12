//title: Sketch 8: Beginnings of a snake game.
console.log('sketch-8')

var x = 100;
var y = 100;

var bg
var list = []

function setup() {
  bg = color(20,90,90)
  colorMode(HSB, 95)
  createCanvas(512, 512);
  
  background(bg)
}

var last = {'x': 0, 'y': 0}

function draw() {
  background(bg)
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