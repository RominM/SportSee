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
import Loader from '../components/Loader';

/**
 * @param { Integer } props id: used for route
 * @returns { JSX }
 */

const Home = () => {
  // get id from url
  const userId = useParams().id;
  // init user

  // init State
  const [loading, setLoading] = useState(true);
  const [activity, setActivity] = useState([]);
  const [average, setAverage] = useState([]);
  const [performance, setPerformance] = useState([]);
  const [keyData, setKeyData] = useState(null);

  // get Data after update state
  useEffect(() => {
    const getKeyData = async () => {
      return service.getMainData(userId);
    };

    getKeyData()
      .then((user) => setKeyData(user))
      .catch((e) => {
        console.log(e);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    if (keyData) {
      const getActivity = async () => {
        return service.getUserActivity(userId);
      };

      const getAverage = async () => {
        return service.getUserAverage(userId);
      };

      const getPerformance = async () => {
        return service.getUserPerformance(userId);
      };

      Promise.all([getActivity(), getAverage(), getPerformance()])
        .then((values) => {
          setActivity(values[0]);
          setAverage(values[1]);
          setPerformance(values[2]);
        })
        .catch((e) => {
          console.log(e);
        })
        .finally(() => {
          setTimeout(() => {
            setLoading(false);
          }, 1500);
        });
    }
  }, [keyData]);

  console.log(keyData);
  /*if (
    !average ||
    !performance.data ||
    !keyData ||
    !activity
    // ||!dataCurrentUser
  ) {
    return null;
  }*/

  // if wrong user URL
  if (loading) {
    return <Loader />;
  }
  if (keyData === undefined || keyData === null) {
    return <Navigate to="not-found" />;
  }
  return (
    <div className="home">
      <Hello currentUser={keyData} />
      <div className="body-graph">
        <Main
          activity={activity}
          average={average}
          performance={performance}
          keyData={keyData}
        />
        <Aside countData={keyData.keyData} />
      </div>
    </div>
  );
};

export default Home;
