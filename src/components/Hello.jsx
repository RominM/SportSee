import React from 'react';

const Hello = ({ currentUser }) => {
  const firstName = currentUser.userInfos.firstName;
  return (
    <>
      <h2 className="h2">
        Bonjour <span>{firstName}</span>
      </h2>
      <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
    </>
  );
};

export default Hello;
