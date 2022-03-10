export class Api {
  constructor(id, userId) {
    this.id = id;
    this.userId = userId;
  }
  async getMainData(id) {
    const response = await fetch('http://localhost:3000/user/' + id);
    const data = await response.json();
    return data.data;
  }
  async getUserActivity(userId) {
    const response = await fetch(
      'http://localhost:3000/user/' + userId + '/activity'
    );
    const data = await response.json();
    console.log(data);
    return data.data;
  }
  async getUserAverage(userId) {
    const response = await fetch(
      'http://localhost:3000/user/' + userId + '/average-sessions'
    );
    const data = await response.json();
    return data.data;
  }
  async getUserPerformance(userId) {
    const response = await fetch(
      'http://localhost:3000/user/' + userId + '/performance'
    );
    const data = await response.json();
    return data.data;
  }
}
