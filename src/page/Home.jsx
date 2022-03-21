// React
import React, { useEffect, useState } from 'react';
import { Navigate, useParams } from 'react-router-dom';
// Service
import dataMocked from '../service/data-mocked';
import { service } from '../service/Service';
// Components
import Hello from '../components/Hello';
import Main from '../components/layout/Main';
import Aside from '../components/layout/Aside';

/**
 * @param { Integer } props id: used for route
 * @returns { JSX }
 */

const Home = () => {
  // get id from url
  const UserData = dataMocked.USER_MAIN_DATA;
  console.log(UserData);
  const userId = useParams().id;
  // init user
  const dataCurrentUser = UserData.find((user) => user.id === Number(userId));
  const currentUserID = dataCurrentUser.id;

  // init State
  const [activity, setActivity] = useState([]);
  const [average, setAverage] = useState([]);
  const [performance, setPerformance] = useState([]);
  const [keyData, setKeyData] = useState([]);

  // get Data after update state
  useEffect(() => {
    const getKeyData = async () => {
      return service.getMainData(currentUserID);
    };

    const getActivity = async () => {
      return service.getUserActivity(currentUserID);
    };

    const getAverage = async () => {
      return service.getUserAverage(currentUserID);
    };

    const getPerformance = async () => {
      return service.getUserPerformance(currentUserID);
    };

    Promise.all([
      getKeyData(),
      getActivity(),
      getAverage(),
      getPerformance(),
    ]).then((values) => {
      setKeyData(values[0]);
      setActivity(values[1]);
      setAverage(values[2]);
      setPerformance(values[3]);
    });
  });

  if (!average || !performance || !keyData || !activity) {
    return null;
  }
  const countData = keyData.keyData;

  // if wrong user URL
  if (!dataCurrentUser) {
    return <Navigate to="not-found" />;
  }
  return (
    <div className="home">
      <Hello dataCurrentUser={dataCurrentUser} />
      <div className="body-graph">
        <Main
          activity={activity}
          average={average}
          performance={performance}
          keyData={keyData}
        />
        <Aside countData={countData} />
      </div>
    </div>
  );
};

export default Home;
