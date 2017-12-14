const fs = require('fs')

const targetFolder = './public'
const files = fs.readdirSync(targetFolder)
  .filter(function(name){
    return name.includes('sketch',0)
  })
  .map(function(name){
    //select the first match of 1 or more digits
    let digit = name.match(/\d+/g)[0]
    // convert to a number format
    return parseInt(digit)
  })

// Find the highest numbered sketch.
const filename = `sketch-${ Math.max(...files) + 1 }.js`
const contents = `function setup() {
  createCanvas(720, 400);
  colorMode(HSL);
  document.getElementById('instructions').textContent = 'This a new sketch'
}

function draw(){

}
`

const path = `${targetFolder}/${filename}`
fs.writeFileSync(path, contents)

try{
  fs.statSync(path)
} catch (error){
  throw new Error(error)
}

console.log(`Created new sketch file at: ${path}`)
