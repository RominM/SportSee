import React from 'react';
import { useParams } from 'react-router-dom';

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

import dataMocked from './../../service/dataUsersMocked';

const Activity = () => {
  const activityData = dataMocked.USER_ACTIVITY;
  const currentRoute = useParams();
  const activityID = currentRoute.activityID;

  // init activity
  const currentActivity = activityData.find((user) => user.id == activityID); // ??? id is an integer but waiting for a string

  const data = currentActivity.sessions;

  return (
    <div className="anaItem activity">
      <ResponsiveContainer width={1000} height={320}>
        <BarChart
          className="graphCenter"
          data={data}
          barGap={8}
          barSize={7}
          margin={{ top: 90, right: 0, bottom: 25, left: 33 }}
        >
          <CartesianGrid strokeDasharray="2" vertical={false} />
          <Legend />
          <XAxis
            dataKey="day"
            axisLine={false}
            padding={{ left: -49, right: -49 }}
            tickLine={false}
            tickMargin={15}
          />
          <Tooltip offset={30} />
          <YAxis
            yAxisId="left"
            axisLine={false}
            domain={['dataMin - 2', 'dataMax + 1']}
            orientation="right"
            tickCount={3}
            tickLine={false}
            tickMargin={25}
          />
          <YAxis
            yAxisId="right"
            axisLine={false}
            domain={['dataMin - 10', 'dataMax + 10']}
            mirror={true}
            tickCount={0}
            tickLine={false}
          />
          <Bar
            yAxisId="left"
            dataKey="kilogram"
            fill="#282D30"
            radius={[43, 43, 0, 0]}
          />
          <Bar
            yAxisId="right"
            dataKey="calories"
            fill="#E60000"
            radius={[43, 43, 0, 0]}
          />{' '}
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Activity;
