import { Api } from './Api.service';
import { Mock } from './Mock.service';

class Service {
  constructor(origin, userId) {
    this.origin = origin;
    this.userId = userId;
  }
  async getMainData() {
    return this.origin.getMainData(this.userId);
  }
  async getUserActivity() {
    return this.origin.getUserActivity(this.userId);
  }
  async getUserAverage() {
    return this.origin.getUserAverage(this.userId);
  }
  async getUserPerformance() {
    return this.origin.getUserPerformance(this.userId);
  }
}

const appUserId = 12;
export const service = new Service(new Mock(), appUserId);
