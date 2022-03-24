// React
import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { PropTypes } from 'prop-types';
// Tools
import BlackPoint from './../../assets/images/BlackPoint.svg';
import RedPoint from './../../assets/images/RedPoint.svg';

/************************************************************************
 * Renders the tooltip (kg/kCal) information when user hovers on barchart
 * @function CustomTooltip
 * @param { boolean } active: inital value false / becomes true when hover on barchart
 * @param { array } payload: contains data to be displayed on hover
 * @returns { JSX }
 */

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: '#ff0101',
          height: 45,
          color: 'white',
          fontSize: 12,
          textAlign: 'center',
          padding: 10,
        }}
      >
        <p>{`${payload[0].value} kg`}</p>
        <p>{`${payload[1].value} kCal`}</p>
      </div>
    );
  }
  return null;
};

/***********************************************************
 * Renders Activities BarChart with Weight & Calories burned
 * @function Activity
 * @param { Object } activity
 * @returns { JSX }
 */

const Activity = ({ activity }) => {
  const daysWeeksNumbers = (date) => {
    const dayNumber = new Date(date);
    return dayNumber.getDate();
  };
  return (
    <div className="activity">
      <div className="legend">
        <h3>Activité quotidienne</h3>
        <div className="legendItems">
          <div>
            <span>
              <img src={BlackPoint} alt="point noir" />
            </span>
            Poids (kg)
          </div>
          <div>
            <span>
              <img src={RedPoint} alt="point rouge" />
            </span>
            Calories Brulées (kCal)
          </div>
        </div>
      </div>
      <ResponsiveContainer width="98%" height="80%">
        <BarChart
          width={500}
          height={200}
          data={activity.sessions}
          barGap={7}
          barSize={7}
          margin={{ top: 10, right: 0, bottom: 25, left: 14 }}
        >
          <CartesianGrid strokeDasharray="2" vertical={false} />
          <XAxis
            dataKey="day"
            axisLine={false}
            tickFormatter={daysWeeksNumbers}
            tickLine={false}
            tickMargin={15}
          />
          <Tooltip content={CustomTooltip} offset={30} />{' '}
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
// Proptypes
CustomTooltip.propTypes = {
  active: PropTypes.bool,
  payload: PropTypes.array,
};

Activity.propTypes = {
  activity: PropTypes.object.isRequired,
};
