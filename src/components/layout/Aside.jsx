// React
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
// Service
import { Mock } from '../../service/Mock.service';
import { Api } from '../../service/Api';
// Components
import Analytics from '../Analytics';
// Tools
import fireIcon from './../../assets/images/fire.svg';
import meatIcon from './../../assets/images/meat.svg';
import appleIcon from './../../assets/images/apple.svg';
import burgerIcon from './../../assets/images/burger.svg';

const Aside = () => {
  const keyDataID = useParams().id;
  const [keyData, setKeyData] = useState([]);
  useEffect(() => {
    const getKeyData = async () => {
      const mock = new Mock();
      const mainUser = await mock.getMainData(keyDataID);
      // const api = new Api();
      // const mainUser = await api.getUserActivity(keyDataID);
      setKeyData(mainUser);
    };
    getKeyData();
  }, [keyDataID]);

  const userData = keyData.keyData;

  return userData ? (
    <aside className="analyticsRight">
      <Analytics
        compoId="calo"
        iconSrc={fireIcon}
        iconAlt="calories"
        compoValue={`${userData.calorieCount}kCal`}
        compoType="Calories"
      />
      <Analytics
        compoId="prot"
        iconSrc={meatIcon}
        iconAlt="protéines"
        compoValue={`${userData.proteinCount}g`}
        compoType="Protéines"
      />
      <Analytics
        compoId="gluc"
        iconSrc={appleIcon}
        iconAlt="glucides"
        compoValue={`${userData.carbohydrateCount}g`}
        compoType="Glucides"
      />
      <Analytics
        compoId="lipi"
        iconSrc={burgerIcon}
        iconAlt="lipides"
        compoValue={`${userData.lipidCount}g`}
        compoType="Lipides"
      />
    </aside>
  ) : (
    <></>
  );
};

export default Aside;
