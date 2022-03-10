// React
import React, { useEffect, useState } from 'react';
import { RadialBar, RadialBarChart } from 'recharts';
// Service
import { service } from '../../service/Service';

const Score = () => {
  const [score, setScore] = useState([]);
  useEffect(() => {
    const getScore = async () => {
      const mainUser = await service.getMainData();

      setScore(mainUser);
    };
    getScore();
  }, []);

  const scoreData = score.todayScore || score.score;

  const scoreValue = [
    { value: 1, fill: 'transparent' },
    { value: scoreData, fill: '#FF0000' },
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
    </div>
  );
};

export default Score;
