import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';

import userController from './controllers/userController';
import moodController from './controllers/moodController';

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', (req, res, next) => {
  res.send({ message: 'hello world' });
});
app.use('/users', userController);
app.use('/moods', moodController);

export default app;
