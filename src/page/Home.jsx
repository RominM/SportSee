import React from 'react';
import { Navigate, useParams } from 'react-router-dom';
import dataMocked from '../service/dataUsersMocked';
import Hello from '../components/Hello';

/**
 * @param { Integer } props id: used for route
 * @returns { JSX }
 */

const Home = () => {
  const UserData = dataMocked.USER_MAIN_DATA;
  const currentRoute = useParams();
  const userId = currentRoute.id;

  // init user
  const currentUser = UserData.find((user) => user.id == userId); // ??? id is an integer but waiting for a string
  // if wrong user URL
  if (!currentUser) {
    return <Navigate to="not-found" />;
  }
  return (
    <div className="home">
      <Hello currentUser={currentUser} />
    </div>
  );
};

export default Home;
