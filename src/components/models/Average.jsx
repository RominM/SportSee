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
    <ResponsiveContainer width="100%" aspect={2}>
      <LineChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="day" />
        <YAxis />
        <Tooltip />
        <Line
          type="monotone"
          dataKey="sessionLength"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default Average;
