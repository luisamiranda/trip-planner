const express = require('express');
const morgan = require('morgan');
const parser = require('body-parser');
const Sequelize = require('sequelize');
const routes = require('./routes');
const nunjucks = require('nunjucks');
const db = new Sequelize('postgres://localhost:5432/trip-planner');

const app = express();

app.use(morgan('dev'));
app.use(parser.urlencoded({extended: true}));
app.use(parser.json());
app.use(express.static('public'));
app.use(routes);


nunjucks.configure('views', {noCache: true});
app.set('view engine', 'html');
app.engine('html', nunjucks.render);

app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});


app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  console.error(err);
  res.render('error');
});


// nunjucks.render('index.html', locals, function (err, output) {
//     console.log(err, output);
// });


app.listen(3000, function() {
  console.log('listening on port 3000');
});
