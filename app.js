var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var engines = require('consolidate');
const bodyParser = require('body-parser');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var studentsRouter = require('./routes/students');
var facultyRouter = require('./routes/faculty');
var DepartmentRouter = require('./routes/Department');
var FeesRouter = require('./routes/Fees');
var syllabusRouter = require('./routes/syllabus');
var timetableRouter = require('./routes/timetable');
var layoutRouter=require('./routes/layout');


var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/students', studentsRouter);
app.use('/faculty', facultyRouter);
app.use('/Department',DepartmentRouter);
app.use('/Fees',FeesRouter);
app.use('/syllabus',syllabusRouter);
app.use('/timetable',timetableRouter);
app.use('/layout',layoutRouter);



// catch 404 and forward to error handler
app.use(function(req, res, next) {
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
