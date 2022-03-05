import React from 'react';

import Analytics from '../models/Analytics';

import fireIcon from './../../assets/images/fire.svg';
import meatIcon from './../../assets/images/meat.svg';
import appleIcon from './../../assets/images/apple.svg';
import burgerIcon from './../../assets/images/burger.svg';

const Aside = () => {
  return (
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
  );
};

export default Aside;
