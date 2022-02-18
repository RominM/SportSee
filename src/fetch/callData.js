import userMock from './userMock';

export const callApi = (id) => {
  fetch('http://localhost:3000/user/' + id)
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      console.log(result.data);
      return result.data;
    });
};

export const callMock = (id) => {
  return userMock.find((user) => user.id === id);
};
