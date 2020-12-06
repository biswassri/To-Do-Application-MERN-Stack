import express from 'express';
import path from 'path';
import cookieParser from'cookie-parser';
import logger from'morgan';
import mongoose from 'mongoose';
import model from './models';
import routes from './routes';

mongoose.connect('mongodb://localhost:27017/resApi', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
mongoose.Promise = global.Promise;


//var indexRouter = require('./routes/index');
//var usersRouter = require('./routes/users');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//app.use('/', indexRouter);
//app.use('/users', usersRouter);

routes(app);

export default app;
