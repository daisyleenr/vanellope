import express from 'express';
import MoodService from '../services/MoodService';
import dotenv from 'dotenv';
dotenv.config();

const moodRouter = express.Router();

const DB_CONFIG = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
}
const moodService = new MoodService(DB_CONFIG);

moodRouter.get('/:userId', async (req, res, next) => {
  const { userId } = req.params;
  const moods = await moodService.findAllByUserId(userId);
  res.send(moods); 
});

module.exports = moodRouter;
