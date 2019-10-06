import mysql from 'mysql2/promise';

export default class MoodDAO {
  constructor(config){
    this.pool = mysql.createPool(config);
  }

  async findAllByUserId(userId) {
    const [rows] = await this.pool.query('select * from mood where user_id = ?', [userId]);
    return rows;
  }
}