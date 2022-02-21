import React from 'react';
import data from './../fetch/userMock';
import { Navigate, useParams } from 'react-router-dom';
import Hello from '../components/Hello';

/**
 * @param { Integer } props id: used for route
 * @returns { JSX }
 */

const Home = () => {
  const dataMocked = data.USER_MAIN_DATA;
  const currentRoute = useParams();
  const userId = currentRoute.id;

  // init user
  const currentUser = dataMocked.find((user) => user.id == userId); // ??? id is an integer but waiting for a string
  // if wrong user URL
  if (!currentUser) {
    return <Navigate to="not-found" />;
  }
  return (
    <div>
      <Hello currentUser={currentUser} />
    </div>
  );
};

export default Home;
