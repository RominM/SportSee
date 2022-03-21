// React
import React from 'react';

const Hello = ({ dataCurrentUser }) => {
  const userData = dataCurrentUser.userInfos;

  return userData ? (
    <div className="hello">
      <h2 className="hello--user">
        Bonjour <span>{userData.firstName}</span>
      </h2>
      <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
    </div>
  ) : (
    <></>
  );
};

export default Hello;
