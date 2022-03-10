// React
import React from 'react';

const Hello = ({ currentUser }) => {
  const firstName = currentUser.userInfos.firstName;
  return (
    <div className="hello">
      <h2 className="hello--user">
        Bonjour <span>{firstName}</span>
      </h2>
      <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
    </div>
  );
};

export default Hello;
