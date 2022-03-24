import {
  USER_MAIN_DATA,
  USER_ACTIVITY,
  USER_AVERAGE_SESSIONS,
  USER_PERFORMANCE,
} from './data-mocked';

// Get data from data-mocked
export class Mock {
  constructor(main, activity, average, performance) {
    this.main = USER_MAIN_DATA;
    this.activity = USER_ACTIVITY;
    this.average = USER_AVERAGE_SESSIONS;
    this.perfomrance = USER_PERFORMANCE;
  }
  async getMainData(id) {
    const userData = this.main.find((user) => user.id === Number(id));
    return userData;
  }

  async getUserActivity(userId) {
    const activityData = this.activity.find(
      (user) => user.userId === Number(userId)
    );
    return activityData;
  }

  async getUserAverage(userId) {
    const averageData = this.average.find(
      (user) => user.userId === Number(userId)
    );
    return averageData;
  }

  async getUserPerformance(userId) {
    const perfomranceData = this.perfomrance.find((user) => {
      return user.userId === Number(userId);
    });
    return perfomranceData;
  }
}
