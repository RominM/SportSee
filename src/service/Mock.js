import {
  USER_MAIN_DATA,
  USER_ACTIVITY,
  USER_AVERAGE_SESSIONS,
  USER_PERFORMANCE,
} from './dataUsersMocked';

export class Mock {
  constructor(main, activity, average, performance) {
    this.main = USER_MAIN_DATA;
    this.activity = USER_ACTIVITY;
    this.average = USER_AVERAGE_SESSIONS;
    this.perfomrance = USER_PERFORMANCE;
  }
  async getMainData(id) {
    const userData = this.main.find((item) => item.id === Number(id));
    return 'Mock Main';
  }
  async getUserActivity(userId) {
    return 'Mock Activity';
  }
  async getUserAverage(userId) {
    return 'Mock Average';
  }
  async getUserPerformance(userId) {
    return 'Mock Performance';
  }
}
