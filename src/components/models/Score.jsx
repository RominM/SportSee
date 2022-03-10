// React
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { RadialBar, RadialBarChart } from 'recharts';
// Service
import { Api } from '../../service/Api';
import { Mock } from '../../service/Mock.service';

const Score = () => {
  const scoreID = useParams().id;
  const [score, setScore] = useState([]);
  useEffect(() => {
    const getScore = async () => {
      const mock = new Mock();
      const mainUser = await mock.getMainData(scoreID);
      // const api = new Api();
      // const mainUser = await api.getUserActivity(scoreID);

      setScore(mainUser);
    };
    getScore();
  }, [scoreID]);

  const scoreData = score.todayScore || score.score;

  // A false daily score of 100% (ie, value: 1) is needed as a comparison
  // in order to display todayScore correctly
  const scoreValue = [
    { value: 1, fill: 'transparent' },
    { value: scoreData, fill: '#FF0000' },
  ];

  // Display RadialBarChart (Recharts)
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
