// React
import React from 'react';
import { Navigate, useParams } from 'react-router-dom';
// Service
import dataMocked from '../service/data-mocked';
// Components
import Hello from '../components/Hello';
import Main from '../components/layout/Main';
import Aside from '../components/layout/Aside';

/**
 * @param { Integer } props id: used for route
 * @returns { JSX }
 */

const Home = () => {
  const UserData = dataMocked.USER_MAIN_DATA;
  const currentRoute = useParams();
  const userId = currentRoute.id;

  // init user
  const currentUser = UserData.find((user) => user.id === Number(userId));
  // if wrong user URL
  if (!currentUser) {
    return <Navigate to="not-found" />;
  }

  return (
    <div className="home">
      <Hello currentUser={currentUser} />
      <div className="body-graph">
        <Main />
        <Aside />
      </div>
    </div>
  );
};

export default Home;
