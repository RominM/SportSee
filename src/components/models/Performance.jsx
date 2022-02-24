import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from 'recharts';

import { Mock } from './../../service/Mock';

/*
const data = [
  {
    subject: 'Math',
    A: 120,
    B: 110,
    fullMark: 150,
  },
  {
    subject: 'Chinese',
    A: 98,
    B: 130,
    fullMark: 150,
  },
  {
    subject: 'English',
    A: 86,
    B: 130,
    fullMark: 150,
  },
  {
    subject: 'Geography',
    A: 99,
    B: 100,
    fullMark: 150,
  },
  {
    subject: 'Physics',
    A: 85,
    B: 90,
    fullMark: 150,
  },
  {
    subject: 'History',
    A: 65,
    B: 85,
    fullMark: 150,
  },
];
*/

import dataMocked from './../../service/dataUsersMocked';

const Performance = () => {
  const performanceData = dataMocked.USER_PERFORMANCE;
  const currentRoute = useParams();
  const perfomanceID = currentRoute.id;

  // init activity
  const currentPerformance = performanceData.find(
    (user) => user.userId == perfomanceID
  ); // ??? id is an integer but waiting for a string

  const perf = currentPerformance.data;

  /**
   *
   *
   *
   *
   */
  const [performance, setPerformance] = useState();
  /**
   *
   *
   *
   *
   */
  const test = new Mock();
  test.getMainData();
  console.log(test.getMainData());

  const TranformKind = (tickItem) => {
    const Kind = [
      'Cardio',
      'Energie',
      'Endurance',
      'Force',
      'Vitesse',
      'Intensité',
    ];
    if (tickItem) return Kind[tickItem - 1];
  };
  return (
    <div className="anaItem performance">
      <ResponsiveContainer width={300} height={300}>
        <RadarChart cx="50%" cy="50%" outerRadius="60%" data={perf}>
          <PolarGrid radialLines={false} />

          <PolarAngleAxis
            dataKey="kind"
            tickFormatter={TranformKind}
            stroke={`#fff`}
            dy={4}
            tickLine={false}
            style={{
              fontSize: '12px',
              fontWeight: '500',
            }}
          />

          <Radar
            name="Mike"
            dataKey="value"
            fill={`#ff0000`}
            fillOpacity={0.7}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Performance;
