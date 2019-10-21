import Mood from '../models/mood';

class MoodService {
  moodList: Mood[] = [];

  addMood(mood: Mood) {
    this.moodList = [...this.moodList, mood];
  }

  getMoods() {
    return this.moodList;
  }

  clear() {
    this.moodList = [];
  }
}

export const moodService = new MoodService();
