import MoodService from '../services/MoodService';
import dotenv from 'dotenv';
dotenv.config();

const USER_ID = 1;
const TEST_DB_CONFIG = {
  host: process.env.TEST_DB_HOST,
  user: process.env.TEST_DB_USER,
  password: process.env.TEST_DB_PASSWORD,
  database: process.env.TEST_DB_NAME
}

test('Find all moods by user id', async () => {
  const moodService = new MoodService(TEST_DB_CONFIG);
  const moods = await moodService.findAllByUserId(USER_ID);
  expect(moods.length).toBe(5);
});