import React, { PureComponent } from 'react';
import { useParams } from 'react-router-dom';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

import dataMocked from './../../service/dataUsersMocked';

const Average = () => {
  const averageData = dataMocked.USER_AVERAGE_SESSIONS;
  const currentRoute = useParams();
  const averageID = currentRoute.averageID;

  // init activity
  const currentAverage = averageData.find((user) => user.id == averageID); // ??? id is an integer but waiting for a string

  const data = currentAverage.sessions;

  return (
    <ResponsiveContainer width={320} height={320} className="anaItem average">
      <LineChart
        data={data}
        margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
        className="graphCenter"
      >
        <Line
          type="monotone"
          dataKey="sessionLength"
          dot={false}
          activeDot={{ r: 5, strokeOpacity: 0.2, strokeWidth: 10 }}
          stroke="white"
        />
        <CartesianGrid horizontal={false} vertical={false} />
        <XAxis
          dataKey="day"
          axisLine={false}
          mirror={true}
          padding={{ left: 10, right: 10 }}
          stroke="rgba(255, 255, 255, 0.5)"
          style={{ fontSize: 12, fontWeight: 500 }}
          tickLine={false}
          tickMargin={15}
        />
        <YAxis
          axisLine={false}
          domain={['dataMin - 20', 'dataMax + 40']}
          mirror={true}
          tickCount={0}
          tickLine={false}
        />
        <Tooltip
          cursor={{ stroke: 'black', strokeOpacity: 0.2, strokeWidth: 40 }}
          offset={30}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default Average;
