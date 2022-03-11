// React
import React, { useEffect, useState } from 'react';
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from 'recharts';
// Service
import { service } from '../../service/Service';

/**
 * Renders Performance Radar chart- SimpleRadarChart (Recharts)
 * @function Performance
 * @param { Object } PerformanceData
 * @param { String[] } Kind
 * @returns { JSX } Performance Radar chart
 */

const Performance = () => {
  const [performance, setPerformance] = useState([]);

  useEffect(() => {
    const getPerfomance = async () => {
      const userPerformance = await service.getUserPerformance();

      setPerformance(userPerformance);
    };
    getPerfomance();
  }, []);
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

  if (!performanceData) {
    return null;
  }

  return (
    <div className="anaItem performance">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart
          width={200}
          height={200}
          cx="50%"
          cy="50%"
          outerRadius="65%"
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
              fontSize: '.7vw',
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
      </ResponsiveContainer>
    </div>
  );
};

export default Performance;

Performance.PropType = {};
