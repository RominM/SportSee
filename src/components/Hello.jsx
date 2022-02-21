import React from 'react';
import RadarData from './models/Radar';

const Hello = ({ currentUser }) => {
  const firstName = currentUser.userInfos.firstName;
  console.log(currentUser);
  return (
    <>
      <h2 className="h2">
        Bonjour <span>{firstName}</span>
      </h2>
      <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
      <RadarData />
    </>
  );
};

export default Hello;
