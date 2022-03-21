// React
import React from 'react';
import PropType, { string } from 'prop-types';
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

const Aside = ({ countData }) => {
  if (!countData) {
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
        }).format(countData.calorieCount)}kCal`}
        compoType="Calories"
      />
      <Analytics
        compoId="prot"
        iconSrc={meatIcon}
        iconAlt="protéines"
        compoValue={`${countData.proteinCount}g`}
        compoType="Protéines"
      />
      <Analytics
        compoId="gluc"
        iconSrc={appleIcon}
        iconAlt="glucides"
        compoValue={`${countData.carbohydrateCount}g`}
        compoType="Glucides"
      />
      <Analytics
        compoId="lipi"
        iconSrc={burgerIcon}
        iconAlt="lipides"
        compoValue={`${countData.lipidCount}g`}
        compoType="Lipides"
      />
    </aside>
  );
};

export default Aside;

Aside.propType = {
  userData: PropType.objectOf(string),
};
