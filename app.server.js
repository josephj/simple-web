const express = require('express');
const app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function (req, res) {
  res.render('welcome');
});

app.listen(4000, function () {
  console.log('app listening on port 4000!');
});
