export default class Formatter {
  mainData = {};
  constructor(oneMainData) {
    this.mainData = oneMainData;
  }

  getUserInfos() {
    return this.mainData.userInfos;
  }

  getScore() {
    return this.mainData.todayScore || this.mainData.score;
  }

  getKeyData() {
    return this.mainData.keyData;
  }
}
