import React from 'react';
import { RadialBar, RadialBarChart, ResponsiveContainer } from 'recharts';

const Score = ({ scoreData }) => {
  // A false daily score of 100% (ie, value: 1) is needed as a comparison
  // in order to display todayScore correctly
  const scoreValue = [
    { value: 1, fill: 'transparent' },
    { value: scoreData, fill: '#FF0000' },
  ];

  // Display RadialBarChart (Recharts)
  return (
    <div className="score anaItem">
      <div>Score</div>
      <div>
        <div>{100 * scoreData}%</div>
        <div>
          de votre <br />
          objectif{' '}
        </div>
      </div>

      <RadialBarChart
        width={320}
        height={320}
        width={80}
        height={350}
        startAngle={90}
        endAngle={450}
        innerRadius={50}
        outerRadius={110}
        barSize={10}
        data={scoreValue}
      >
        <RadialBar cornerRadius={50} dataKey="value" />
      </RadialBarChart>
    </div>
  );
};

export default Score;
