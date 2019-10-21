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
      beforeAll(() => {
        moodService.addMood(new Mood(5, 'hello'));
      });

      it('returns all moods', () => {
        const moods = moodService.getMoods();
        expect(moods[0].memo).toBe('hello');
      });
    });
  });
});
