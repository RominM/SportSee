import React, { useEffect, useState } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import dataMocked from '../service/dataUsersMocked';
import Hello from '../components/Hello';
import Main from '../components/layout/Main';
import Analytics from '../components/Analytics';

import fireIcon from './../assets/images/fire.svg';
import meatIcon from './../assets/images/meat.svg';
import appleIcon from './../assets/images/apple.svg';
import burgerIcon from './../assets/images/burger.svg';
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
  const currentUser = UserData.find((user) => user.id == userId); // ??? id is an integer but waiting for a string
  // if wrong user URL
  if (!currentUser) {
    return <Navigate to="not-found" />;
  }

  return (
    <div className="home">
      <Hello currentUser={currentUser} />
      <div className="body-graph">
        <Main />
        <aside className="analyticsRight">
          <Analytics
            // id={currentUser.id}
            compoId="calo"
            iconSrc={fireIcon}
            iconAlt="calories"
            // compoValue={`${keyData.calorieCount}kCal`}
            compoType="Calories"
          />
          <Analytics
            // id={currentUser.id}
            compoId="prot"
            iconSrc={meatIcon}
            iconAlt="protéines"
            // compoValue={`${keyData.proteinCount}g`}
            compoType="Protéines"
          />
          <Analytics
            // id={currentUser.id}
            compoId="gluc"
            iconSrc={appleIcon}
            iconAlt="glucides"
            // compoValue={`${keyData.carbohydrateCount}g`}
            compoType="Glucides"
          />
          <Analytics
            // id={currentUser.id}
            compoId="lipi"
            iconSrc={burgerIcon}
            iconAlt="lipides"
            // compoValue={`${keyData.lipidCount}g`}
            compoType="Lipides"
          />
        </aside>
      </div>
    </div>
  );
};

export default Home;
