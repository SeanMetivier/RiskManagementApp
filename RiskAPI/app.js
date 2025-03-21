//Module Imports
require('dotenv').config();
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
var cors = require('cors');



//Express App Setup
var app = express();

//CORS
app.use(cors({
  origin: 'http://localhost:4200', // Allow frontend to call backend
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  allowedHeaders: ['Content-Type', 'Authorization'], // Allow Authorization header
  credentials: true
}));



//Route Imports
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var commentsRouter = require('./routes/comments');
var controlsRouter = require('./routes/controls');
var controlObjectivesRouter = require('./routes/controlObjectives');
var filesRouter = require('./routes/files');
var mitigationPlansRouter = require('./routes/mitigationPlans');
var organizationsRouter = require('./routes/organizations');
var reportsRouter = require('./routes/reports');
var risksRouter = require('./routes/risks');
var riskcontrolObjectivesRouter = require('./routes/riskcontrolObjectives');
var rolesRouter = require('./routes/roles');



//Database Connection
const mongoURI = process.env.MONGO_URI;

mongoose.connect( mongoURI)
.then(() => {
  console.log('MongoDB Connected');
})
.catch((error) =>{
  console.error('No connection',error);
});


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

//middleware setup
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//public routes
app.use('/', indexRouter);


//protected routes
app.use('/users', usersRouter);
app.use('/roles', rolesRouter);
app.use('/organizations', organizationsRouter);
app.use('/risks', risksRouter);
app.use('/mitigationPlans', mitigationPlansRouter);
app.use('/reports', reportsRouter);
app.use('/controls',controlsRouter);
app.use('/controlObjectives', controlObjectivesRouter);
app.use('/riskcontrolObjectives',riskcontrolObjectivesRouter);
app.use('/comments', commentsRouter);
app.use('/files', filesRouter);



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
