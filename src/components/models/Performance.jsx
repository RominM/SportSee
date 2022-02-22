import React from 'react';
import { useParams } from 'react-router-dom';

import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from 'recharts';

import dataMocked from './../../service/dataUsersMocked';

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

const Performance = () => {
  const performanceData = dataMocked.USER_PERFORMANCE;
  const currentRoute = useParams();
  const perfomanceID = currentRoute.perfomanceID;

  // init activity
  const currentPerformance = performanceData.find(
    (user) => user.id == perfomanceID
  ); // ??? id is an integer but waiting for a string

  const data = currentPerformance.data;

  return (
    <ResponsiveContainer width="100%" aspect={1}>
      <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
        <PolarGrid />
        <PolarAngleAxis dataKey="kind" />
        <PolarRadiusAxis />
        <Radar
          name="Mike"
          dataKey="value"
          stroke="#8884d8"
          fill="#8884d8"
          fillOpacity={0.6}
        />
      </RadarChart>
    </ResponsiveContainer>
  );
};

export default Performance;
