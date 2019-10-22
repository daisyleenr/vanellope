import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';

import userRouter from './routers/userRouter';
import moodRouter from './routers/moodRouter';

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', (req, res, next) => {
  res.send({ message: 'hello world' });
});
app.use('/users', userRouter);
app.use('/moods', moodRouter);

export default app;
