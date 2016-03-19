var express = require('express')
var app = express()
var path = require('path')

app.use(express.static('public/')) 

app.use('/', function (req, res) {
  res.sendFile(path.resolve(__dirname, 'public/'))
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});