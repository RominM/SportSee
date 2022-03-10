// React
import React, { useEffect, useState } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
// Service
import { service } from '../../service/Service';

/**
 * Renders Average Sessions Line Chart
 * @function Average
 * @param { Object } averageData
 * @returns {JSX}
 */

const Average = () => {
  const [average, setAverage] = useState([]);

  useEffect(() => {
    const getAverage = async () => {
      const userAverage = await service.getUserAverage();
      setAverage(userAverage);
    };
    getAverage();
  }, []);

  const averageData = average.sessions;

  /**
   * * Renders the tooltip (minutes) information when user hovers on the line chart
   * @function CustomTooltip
   * @param { boolean } active: inital value false / becomes true when hover on linechart
   * @param { array } payload: contains data to be displayed on hover
   * @returns { JSX }
   */

  const customTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div
          style={{
            background: 'white',
            fontSize: 10,
            fontWeight: 500,
            textAlign: 'center',
            padding: 10,
          }}
        >
          <p>{`${payload[0].value} min`}</p>
        </div>
      );
    }
    return null;
  };

  const daysWeekTxt = (day) => {
    const days = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];
    return days[day - 1];
  };

  if (!averageData) {
    return null;
  }

  return (
    <div className="anaItem average">
      <h3>
        Durée moyenne des <br />
        sessions
      </h3>
      <LineChart
        width={200}
        height={200}
        data={averageData}
        margin={{ top: 0, right: 10, bottom: 0, left: 10 }}
      >
        <Line
          type="monotone"
          dataKey="sessionLength"
          dot={false}
          activeDot={{ r: 5, strokeOpacity: 0.2, strokeWidth: 10 }}
          stroke="rgba(255, 255, 255, 0.5)"
          strokeWidth={2}
        />
        <XAxis
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
          content={customTooltip}
          cursor={{ stroke: 'black', strokeOpacity: 0.2, strokeWidth: 40 }}
          offset={30}
        />
      </LineChart>
    </div>
  );
};

export default Average;
