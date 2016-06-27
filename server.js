var express = require('express')
var app = express()
var http = require('http').Server(app)
var os = require('os')
var handlebars = require('express-handlebars')

app.use(express.static(__dirname + '/public'))

app.engine('handlebars', handlebars({
  defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

app.get('/', function (req, res) {
  res.render('home');
});

app.get('/sketch/:id', function (req, res, next) {
  console.log('requested id: ' + req.params.id)
  console.log('requested url: ' + req.url)
  console.log('expanded filename: sketch-' + req.params.id + '.js')
  console.log('--------------')
  res.render('sketch', {file: req.params.id})
})

http.listen(3000, '0.0.0.0', function () {
  console.log(`listening on ${ os.hostname() } at: ${http.address().port}`)
})