import React from 'react';
import Activity from './models/Activity';
import Average from './models/Average';
import Performance from './models/Performance';

const Hello = ({ currentUser }) => {
  const firstName = currentUser.userInfos.firstName;
  return (
    <>
      <h2 className="h2">
        Bonjour <span>{firstName}</span>
      </h2>
      <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
      <main>
        <Activity />
        <div className="secondary-graph">
          <Average />
          <Performance />
          
        </div>
      </main>
    </>
  );
};

export default Hello;
