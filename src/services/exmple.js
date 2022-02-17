import { mockUsers } from './mockUsers';
import { Api } from './fromBack';

export const getUser = async (id) => {
  // const api = new Api()
  const api = new mockUsers();
  const result = await api.getUsersById(id);

  return result;
};
