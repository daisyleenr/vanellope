import express from 'express';
import logger from 'morgan';
// import path from 'path';
// import cookieParser from 'cookie-parser';

import userRouter from './routers/userRouter';
import moodRouter from './routers/moodRouter';

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (_, res) => {
  res.send({ message: 'hello world' });
});
app.use('/users', userRouter);
app.use('/moods', moodRouter);

export default app;
