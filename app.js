var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var studentRouter = require('./routes/student');//Importing student
var teacherRouter = require('./routes/teacher');
var loginRouter = require('./routes/login');//importing login /



var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/users', usersRouter);
app.use('/student', studentRouter);   //setting student and giving to import
app.use('/teacher', teacherRouter);
app.use('/login',loginRouter);//setting up path for login
app.use('/', indexRouter); //when we don't have folder and still want to rout the it comes to it

// catch 404 and forward to error handler//sdssdfasd
app.use(function(req, res, next) {app.use('/student', studentRouter);   //Routing
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
