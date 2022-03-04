import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';
import { Mock } from '../../service/Mock';

const Average = () => {
  const averageID = useParams().id;
  const [average, qetAverage] = useState([]);

  useEffect(() => {
    const testPerf = async () => {
      const mock = new Mock();
      const userAverage = await mock.getUserAverage(averageID);
      qetAverage(userAverage);
    };
    testPerf();
  }, [averageID]);
  const averageData = average.sessions;
  console.log(averageData);

  const daysWeekTxt = (day) => {
    const days = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];
    return days[day - 1];
  };

  return (
    <>
      <div>Durée moyenne des sessions</div>
      <LineChart
        width={300}
        height={300}
        className="anaItem average graphCenter"
        data={averageData}
        margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
      >
        <Line
          type="monotone"
          dataKey="sessionLength"
          dot={false}
          activeDot={{ r: 5, strokeOpacity: 0.2, strokeWidth: 10 }}
          stroke="white"
        />
        <CartesianGrid horizontal={false} vertical={false} />
        <XAxis // DAYS
          dataKey="day"
          axisLine={false}
          mirror={true}
          padding={{ left: 10, right: 10 }}
          stroke="rgba(255, 255, 255, 0.5)"
          style={{ fontSize: 12, fontWeight: 500 }}
          tickLine={false}
          tickMargin={15}
          tickFormatter={daysWeekTxt}
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
    </>
  );
};

export default Average;
