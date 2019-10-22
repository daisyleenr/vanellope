import Mood from '../models/mood';

class MoodService {
  moods: Mood[] = [];

  createMood(mood: Mood) {
    this.moods = [...this.moods, mood];
  }

  getMoods() {
    return this.moods;
  }

  clear() {
    this.moods = [];
  }
}

export const moodService = new MoodService();
