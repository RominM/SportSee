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
  const averageID = currentRoute.id;

  // init activity
  const currentAverage = averageData.find((user) => user.userId == averageID); // ??? id is an integer but waiting for a string

  const data = currentAverage.sessions;

  const TranformDay = (tickItem) => {
    const Day = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];
    if (tickItem) return Day[tickItem - 1];
  };

  return (
    <>
      <div>Durée moyenne des sessions</div>
      <ResponsiveContainer width={300} height={300} className="anaItem average">
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
            tickFormatter={TranformDay}
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
    </>
  );
};

export default Average;
