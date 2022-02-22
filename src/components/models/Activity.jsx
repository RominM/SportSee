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
    <ResponsiveContainer width="100%" aspect={1.5} className="activity">
      <BarChart
        width={500}
        height={750}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="100 3" />
        <Legend />
        <XAxis dataKey="day" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="kilogram" fill="#000" />
        <Bar dataKey="calories" fill="#ff0101" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default Activity;
