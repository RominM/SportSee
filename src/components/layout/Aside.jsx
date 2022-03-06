import React, { useEffect, useState } from 'react';

import Analytics from '../models/Analytics';

import fireIcon from './../../assets/images/fire.svg';
import meatIcon from './../../assets/images/meat.svg';
import appleIcon from './../../assets/images/apple.svg';
import burgerIcon from './../../assets/images/burger.svg';
import { useParams } from 'react-router-dom';
import { Mock } from '../../service/Mock';

const Aside = () => {
  const keyDataID = useParams().id;
  const [keyData, setKeyData] = useState([]);
  useEffect(() => {
    const getKeyData = async () => {
      const mock = new Mock();
      const mainUser = await mock.getMainData(keyDataID);
      console.log(mainUser);
      setKeyData(mainUser);
    };
    getKeyData();
  }, [keyDataID]);

  const userData = keyData.keyData;
  console.log(userData);
  return (
    <aside className="analyticsRight">
      <Analytics
        compoId="calo"
        iconSrc={fireIcon}
        iconAlt="calories"
        // compoValue={`${userData.calorieCount}kCal`}
        compoType="Calories"
      />
      <Analytics
        compoId="prot"
        iconSrc={meatIcon}
        iconAlt="protéines"
        // compoValue={`${userData.proteinCount}g`}
        compoType="Protéines"
      />
      <Analytics
        compoId="gluc"
        iconSrc={appleIcon}
        iconAlt="glucides"
        // compoValue={`${userData.carbohydrateCount}g`}
        compoType="Glucides"
      />
      <Analytics
        compoId="lipi"
        iconSrc={burgerIcon}
        iconAlt="lipides"
        // compoValue={`${userData.lipidCount}g`}
        compoType="Lipides"
      />
    </aside>
  );
};

export default Aside;
