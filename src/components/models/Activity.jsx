import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

import { Mock } from './../../service/Mock';

const Activity = () => {
  const activityID = useParams().id;
  const [activity, setActivity] = useState([]);

  useEffect(() => {
    const testPerf = async () => {
      const mock = new Mock();
      const userActivity = await mock.getUserActivity(activityID);
      setActivity(userActivity);
    };
    testPerf();
  }, [activityID]);
  const activityData = activity.sessions;

  const daysWeeksNumbers = (date) => {
    const dayNumber = new Date(date);
    return dayNumber.getDate();
  };

  return (
    <div className="anaItem activity">
      <div className="Legend">
        <span>Activité quotidienne</span>
        <div className="LegendItems">
          <div>
            <span>⚫</span>
            Poids (kg)
          </div>
          <div>
            <span>🔴</span>
            Calories Brulées (kCal)
          </div>
        </div>
      </div>
      <BarChart
        width={920}
        height={340}
        data={activityData}
        barGap={9}
        barSize={9}
        margin={{ top: 90, right: 0, bottom: 25, left: 14 }}
      >
        <CartesianGrid strokeDasharray="2" vertical={false} />
        <XAxis
          dataKey="day"
          axisLine={false}
          // padding={{ left: -49, right: -49 }}
          tickFormatter={daysWeeksNumbers}
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
    </div>
  );
};

export default Activity;
