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

import dataMocked from './../../service/dataUsersMocked';
import { TestData } from '../../service/test';
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
const Performance = () => {
  const performanceData = dataMocked.USER_PERFORMANCE;
  const currentRoute = useParams();
  const perfomanceID = currentRoute.id;

  // init activity
  const currentPerformance = performanceData.find(
    (user) => user.userId == perfomanceID
  ); // ??? id is an integer but waiting for a string

  const data = currentPerformance.data;
  console.log(data);
  // TestData();
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
  return (
    <ResponsiveContainer
      width={320}
      height={320}
      className="anaItem performance"
    >
      <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
        <PolarGrid />
        <PolarAngleAxis dataKey="kind" />
        <PolarRadiusAxis />
        <Radar
          name="Mike"
          dataKey="value"
          stroke="#ff000"
          fill="#ff0000"
          fillOpacity={0.6}
        />
      </RadarChart>
    </ResponsiveContainer>
  );
};

export default Performance;
