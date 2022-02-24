export class Api {
  constructor(id, userId) {
    this.id = id;
    this.userId = userId;
  }
  async getMainData(id) {
    return `Api Main`;
  }
  async getUserActivity(userId) {
    return 'Api Activity';
  }
  async getUserAverage(userId) {
    return 'Api Average';
  }
  async getUserPerformance(userId) {
    return 'Api Perfomrance';
  }
}
