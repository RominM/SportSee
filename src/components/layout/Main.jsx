import React from 'react';
import Activity from '../models/Activity';
import Average from '../models/Average';
import Performance from '../models/Performance';
import Score from '../models/Score';

const Main = () => {
  return (
    <main>
      <Activity />
      <div className="secondary-graph">
        <Average />
        <Performance />
        <Score />
      </div>
    </main>
  );
};

export default Main;
