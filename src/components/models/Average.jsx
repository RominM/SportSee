import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from 'recharts';
import { Mock } from '../../service/Mock';

const Average = () => {
  const averageID = useParams().id;
  const [average, setAverage] = useState([]);

  useEffect(() => {
    const getAverage = async () => {
      const mock = new Mock();
      const userAverage = await mock.getUserAverage(averageID);
      setAverage(userAverage);
    };
    getAverage();
  }, [averageID]);
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

  return (
    <div className="anaItem average">
      <h3>
        Durée moyenne des <br />
        sessions
      </h3>
      <LineChart
        width={320}
        height={320}
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
        />{' '}
      </LineChart>
    </div>
  );
};

export default Average;
