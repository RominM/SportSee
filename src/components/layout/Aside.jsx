// React
import React, { useEffect, useState } from 'react';
import PropType, { string } from 'prop-types';
// Service
import { service } from '../../service/Service';
// Components
import Analytics from '../Analytics';
// Tools
import fireIcon from './../../assets/images/fire.svg';
import meatIcon from './../../assets/images/meat.svg';
import appleIcon from './../../assets/images/apple.svg';
import burgerIcon from './../../assets/images/burger.svg';

/**
 * Renders the data showing health (calories, carbohydrates, lipids & protiens)
 * @function Aside
 * @param { Object } userData
 * @returns { JSX }
 */

const Aside = () => {
  const [keyData, setKeyData] = useState([]);

  useEffect(() => {
    const getKeyData = async () => {
      const mainUser = await service.getMainData();
      setKeyData(mainUser);
    };
    getKeyData();
  }, []);

  const userData = keyData.keyData;

  if (!userData) {
    return null;
  }

  return (
    <aside className="analyticsRight">
      <Analytics
        compoId="calo"
        iconSrc={fireIcon}
        iconAlt="calories"
        compoValue={`${new Intl.NumberFormat('en-IN', {
          maximumSignificantDigits: 3,
        }).format(userData.calorieCount)}kCal`}
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
  );
};

export default Aside;

Aside.propType = {
  userData: PropType.objectOf(string),
};
