import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
} from 'recharts';

import { Mock } from './../../service/Mock';

const Performance = () => {
  const performanceID = useParams().id;
  const [performance, setPerformance] = useState([]);

  useEffect(() => {
    const testPerf = async () => {
      const mock = new Mock();
      const userPerformance = await mock.getUserPerformance(performanceID);
      setPerformance(userPerformance);
    };
    testPerf();
  }, [performanceID]);
  const performanceData = performance.data;

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
      <RadarChart
        width={320}
        height={320}
        cx="50%"
        cy="50%"
        outerRadius="60%"
        data={performanceData}
      >
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
          name="Radar"
          dataKey="value"
          fill={`#ff0000`}
          fillOpacity={0.7}
        />
      </RadarChart>
    </div>
  );
};

export default Performance;
