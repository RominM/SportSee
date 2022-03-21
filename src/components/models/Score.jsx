// React
import React from 'react';
import { RadialBar, RadialBarChart, ResponsiveContainer } from 'recharts';
import { PropTypes } from 'prop-types';

/**
 * Renders the user's Score on a RadialBarChart (Recharts)
 * @function Score
 * @param { Number } scoreData: users daily score
 * @returns { JSX }
 */

const Score = ({ keyData }) => {
  const scoreData = keyData.todayScore || keyData.score;

  const scoreValue = [
    { value: 1, fill: 'transparent' },
    { value: scoreData, fill: '#ff0101' },
  ];

  if (!scoreData) {
    return null;
  }
  return (
    <div className="anaItem score">
      <h3>Score</h3>
      <p>
        <strong>{100 * scoreData}%</strong>
        <br />
        <span>
          de votre <br />
          objectif
        </span>
      </p>
      <ResponsiveContainer width="100%" height="100%">
        <RadialBarChart
          width={200}
          height={200}
          startAngle={90}
          endAngle={450}
          innerRadius={90}
          outerRadius={55}
          barSize={7}
          data={scoreValue}
        >
          <RadialBar cornerRadius={50} dataKey="value" />
        </RadialBarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Score;

Score.propTypes = {
  scoreData: PropTypes.string,
};
