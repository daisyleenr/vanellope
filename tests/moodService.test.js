import mysql from 'mysql2/promise';
import MoodService from '../services/MoodService';
import dotenv from 'dotenv';
dotenv.config();

const USER_ID = 999;
const TEST_DB_CONFIG = {
  host: process.env.TEST_DB_HOST,
  user: process.env.TEST_DB_USER,
  password: process.env.TEST_DB_PASSWORD,
  database: process.env.TEST_DB_NAME
}

beforeAll(async () => {
  const pool = mysql.createPool(TEST_DB_CONFIG);
  await pool.query('INSERT INTO `user` (`id`) VALUES (?)', [USER_ID]);
  for(let i = 0; i < 5; i++){
    await pool.query('INSERT INTO `mood` (`id`, `score`, `memo`, `user_id`) VALUES (?, ?, ?, ?)', [10000 + i, 7, 'test contents ' + i, USER_ID]);
  }
});

afterAll(async () => {
  const pool = mysql.createPool(TEST_DB_CONFIG);
  await pool.query('DELETE FROM `mood` WHERE `user_id` = ?', USER_ID);
  await pool.query('DELETE FROM `user` WHERE `id` = ?', USER_ID);
});

test('Find all moods by user id', async () => {
  const moodService = new MoodService(TEST_DB_CONFIG);
  const moods = await moodService.findAllByUserId(USER_ID);
  expect(moods.length).toBe(5);
});