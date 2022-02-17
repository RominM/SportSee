export const service = (props) => {
  const id = props.id;

  const URL_Api = 'http://localhost:3000/user/' + id;
  const usersMocked = require('./usersMocked.json');

  const getUsersById = async (id) => {
    !URL_Api
      ? usersMocked.find((user) => user.id === id)
      : fetch(URL_Api)
          .then((reponse) => reponse.json())
          .then((jsonResponse) => jsonResponse.data);
  };
  getUsersById(id);
};
