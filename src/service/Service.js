import { Api } from './Api';
import { Mock } from './Mock';

export class Service {
  constructor(origin, id, userId) {
    this.origin = origin === 'mock' ? new Mock() : new Api();
    this.id = id;
    this.userId = userId;
  }
  async getUserService(id, userId) {
    return this.origin.getMainData();
  }
}
