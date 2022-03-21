// React
import React from 'react';
// Components
import Activity from '../models/Activity';
import Average from '../models/Average';
import Performance from '../models/Performance';
import Score from '../models/Score';

const Main = ({ activity, average, performance, keyData }) => {
  return (
    <main>
      <Activity activity={activity} />
      <div className="secondary-graph">
        <Average average={average} />
        <Performance performance={performance} />
        <Score keyData={keyData} />
      </div>
    </main>
  );
};

export default Main;
