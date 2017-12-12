var express = require('express')
var app = express()
var http = require('http').Server(app)
var os = require('os')
var fs = require('fs')
var handlebars = require('express-handlebars')
var port  = process.env.PORT || 3000

app.use(express.static(__dirname + '/public'))

app.engine('handlebars', handlebars({
  defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

var navList = fs.readdirSync('./public')
  .filter(function(name){
    return name.includes('sketch',0)
  })
  .map(function(name){
    //select the first match of 1 or more digits
    return name.match(/\d+/g)[0]
  })
  .sort(function(a,b){
    var numA = parseInt(a, 10)
    var numB = parseInt(b, 10)
    return numA - numB
  })

app.get('/', function (req, res) {
  res.render('home');
});

app.get('/sketch/:id', function (req, res, next) {
  console.log('requested id: ' + req.params.id)
  console.log('requested url: ' + req.url)
  console.log('expanded filename: sketch-' + req.params.id + '.js')
  console.log('--------------')
  res.render('sketch', {nav: navList, file: req.params.id})
})

http.listen(port, function () {
  console.log(`listening on ${ os.hostname() } at: ${http.address().port}`)
})
