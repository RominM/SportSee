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
    const userData = this.main.find((item) => item.id === id);
    return userData;
  }

  async getUserActivity(userId) {
    const activityData = this.activity.find((item) => item.id === userId);
    return activityData;
  }

  async getUserAverage(userId) {
    const averageData = this.average.find((item) => item.id === userId);
    return averageData;
  }

  async getUserPerformance(userId) {
    const perfomranceData = this.perfomrance.find((item) => {
      return item.userId === Number(userId);
    });
    return perfomranceData;
  }
}
