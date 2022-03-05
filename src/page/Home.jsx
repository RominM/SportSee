import React, { useEffect, useState } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import dataMocked from '../service/dataUsersMocked';
import Hello from '../components/Hello';
import Main from '../components/layout/Main';
import Aside from '../components/layout/Aside';

import { Mock } from '../service/Mock';

/**
 * @param { Integer } props id: used for route
 * @returns { JSX }
 */

const Home = () => {
  /*
  const userID = useParams().id;
  const [user, setUser] = useState([]);

  useEffect(() => {
    const testPerf = async () => {
      const mock = new Mock();
      const user = await mock.getMainData(userID);
      setUser(user);
    };
    testPerf();
  }, [userID]);
  const userData = user.data;

  console.log(userData);

  */
  /*
   *
   *
   *
   *
   *
   *
   */

  const UserData = dataMocked.USER_MAIN_DATA;
  const currentRoute = useParams();
  const userId = currentRoute.id;

  // init user
  const currentUser = UserData.find((user) => user.id === Number(userId)); // ??? id is an integer but waiting for a string
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
