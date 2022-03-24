import { Api } from './Api.service';
import { Mock } from './Mock.service';

class Service {
  constructor(origin) {
    this.origin = origin;
  }
  async getMainData(userId) {
    return this.origin.getMainData(userId);
  }
  async getUserActivity(userId) {
    return this.origin.getUserActivity(userId);
  }
  async getUserAverage(userId) {
    return this.origin.getUserAverage(userId);
  }
  async getUserPerformance(userId) {
    return this.origin.getUserPerformance(userId);
  }
}

export const service = new Service(new Mock());
