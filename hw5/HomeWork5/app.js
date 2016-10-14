var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var ejs = require('ejs');
var routes = require('./routes/index');
var users = require('./routes/users');
var inventors = require('./routes/inventors')
var contactus = require('./routes/contactus')
var decrypt = require('./routes/decrypt')
var location = require('./routes/location')
var resturant = require('./routes/mongohw');
var zips=require('./routes/zips');
var cons = require('consolidate')
// New Code
var MongoClient = require('mongodb').MongoClient;
var MongoServer = require('mongodb').Server;
//var monk = require('monk');
//var db = monk('mongodb://dewei:dewei@ds021895.mlab.com:21895/lanbue'); 
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));

//change view extension to .html and use consolidate.js 
app.set('view engine', 'html');
app.engine('html', ejs.renderFile)

//

app.set('case sensitive routing', true)
app.set('strict routing', true)
app.set('env', 'development')
app.set('x-powered-by', false)
app.set('trust proxy', true)
app.enable('trust proxy')
// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(cookieParser());
app.use(require('less-middleware')(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));







app.use('/', routes);
app.use('/users', users);
app.use('/inventors', inventors)
app.use("/contactus", contactus)
app.use("/decrypt", decrypt)
app.use("/resturant", resturant)
app.use("/location", location)
app.use("/zips",zips)
// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error('Not Found, Sorry');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

app.listen(80, function () {
  console.log("my app is running on port: 80")
})
module.exports = app;