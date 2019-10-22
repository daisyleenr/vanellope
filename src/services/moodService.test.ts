import { moodService } from './moodService';
import Mood from '../models/mood';

describe('MoodService', () => {
  describe('getMoods', () => {
    beforeAll(() => {
      moodService.clear();
    });

    describe('with no moods', () => {
      it('returns all moods', () => {
        const moods = moodService.getMoods();
        expect(moods).toEqual([]);
      });
    });

    describe('with some moods', () => {
      const TEST_MEMO = 'hello';
      const TEST_SCORE = 5;

      beforeAll(() => {
        const testMood = new Mood(TEST_SCORE, TEST_MEMO);
        moodService.createMood(testMood);
      });

      it('returns all moods', () => {
        const moods = moodService.getMoods();
        expect(moods[0].memo).toBe(TEST_MEMO);
      });
    });
  });
});
