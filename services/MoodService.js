import MoodDAO from '../dao/MoodDAO';

export default class MoodService {
  constructor(config){
    this.moodDAO = new MoodDAO(config);
  }

  async findAllByUserId(userId) {
    return await this.moodDAO.findAllByUserId(userId);
  }
}