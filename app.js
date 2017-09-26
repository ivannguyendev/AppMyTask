 // set up ========================
var express = require('express');
var path = require('path');
// var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
const fileApi = require('./routes/file.route');
const taskApi = require('./routes/task.route');

var mongoose = require('mongoose');
Promise = require('bluebird'); // // make bluebird default Promise eslint-disable-line no-global-assign

var app = express();
/**
 * Get port from environment and store in Express.
 */
const port = process.env.PORT || '3000';
app.set('port', port);
//Url address Database
const mongoDb = 'mongodb://localhost:27017/myTask'

// configuration =================

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
// Point static path to dist
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'src')));
app.use(express.static(path.join(__dirname, 'dist')));
// Set our api routes
app.use('/file',fileApi);
app.use('/task',taskApi);

app.use('/**',function(req, res, next){
  return res.sendFile(path.join(__dirname, './dist/index.html'));
});

app.use(methodOverride());
  
// plugin bluebird promise in mongoose
mongoose.Promise = Promise;
//Database
mongoose.connect(mongoDb,{
  useMongoClient: true
});
//Get the default connection
var db = mongoose.connection;
//Bind connection to error event (to get notification of connection errors)
mongoose.connection.on('error', console.error.bind(console,'connection error: '));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  next(err);
  // res.render('error');
});


/**
 * Listen on provided port, on all network interfaces.
 */
app.listen(port, () => console.log(`API running on localhost:${port}`));
module.exports = app;
