var x = 100;
var y = 100;
var barWidth = 0.5;
var barlength = 0.5;
var earlybar = 0;
var col = 10

var bg
var list = []

function setup() {
  bg = color(20,90,90)
  colorMode(HSB, 95)
  createCanvas(512, 512);
  
  background(bg)
  fullscreen(true)
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
    console.log('last.x: ' + last.x + ' Circle.x: ' + circle.x + 'last.y: ' + last.y + ' Circle.y: ' + circle.y)
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