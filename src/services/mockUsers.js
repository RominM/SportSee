import usersMocked from './usersMocked.json';

export class mockUsers {
  constructor() {}

  async getUsersById(id) {
    return usersMocked.find((user) => user.id === id);
  }
}
