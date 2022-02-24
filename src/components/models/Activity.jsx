import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

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
  const activityID = currentRoute.id;

  // init activity
  const currentActivity = activityData.find(
    (user) => user.userId == activityID
  ); // ??? id is an integer but waiting for a string

  const data = currentActivity.sessions;

  const Legend = styled.article`
    display: flex;
    justify-content: space-between;
    width: 920px;
    margin-top: 50px;
  `;
  const LegendItems = styled.article`
    display: flex;
  `;

  const TranformDate = (tickItem) => {
    let formattedDate = '';

    if (tickItem) {
      let parts = tickItem.split('-');
      formattedDate = `${parts[2].replace(/^0+/, '')}`;
    }
    return formattedDate;
  };

  return (
    <div className="anaItem activity">
      <Legend>
        <span>Activité quotidienne</span>
        <LegendItems>
          <div>
            <span>⚫</span>
            Poids (kg)
          </div>
          <div>
            <span>🔴</span>
            Calories Brulées (kCal)
          </div>
        </LegendItems>
      </Legend>
      <ResponsiveContainer width={920} height={340}>
        <BarChart
          data={data}
          barGap={9}
          barSize={9}
          margin={{ top: 90, right: 0, bottom: 25, left: 14 }}
        >
          <CartesianGrid strokeDasharray="2" vertical={false} />
          <XAxis
            dataKey="day"
            axisLine={false}
            // padding={{ left: -49, right: -49 }}
            tickFormatter={TranformDate}
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
            domain={['dataMin - 55', 'dataMax + 10']}
            mirror={true}
            tickCount={0}
            tickLine={false}
          />
          <Bar
            yAxisId="left"
            dataKey="kilogram"
            fill="#282D30"
            radius={[50, 50, 0, 0]}
          />
          <Bar
            yAxisId="right"
            dataKey="calories"
            fill="#E60000"
            radius={[50, 50, 0, 0]}
          />{' '}
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Activity;
