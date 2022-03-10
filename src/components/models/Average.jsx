// React
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
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

  const daysWeekTxt = (day) => {
    const days = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];
    return days[day - 1];
  };

  /**
   * Show custom tooltip
   * @param {Object} params
   * @param {Boolean} params.active
   * @param {Array} params.payload
   * @return {JSX || null}
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

  return averageData ? (
    <div className="anaItem average">
      <h3>
        Durée moyenne des <br />
        sessions
      </h3>
      <ResponsiveContainer>
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
      </ResponsiveContainer>
    </div>
  ) : (
    <></>
  );
};

export default Average;
