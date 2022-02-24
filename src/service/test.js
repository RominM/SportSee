import { useParams } from 'react-router-dom';
import dataMocked from './../service/dataUsersMocked';

export const TestData = () => {
  const performanceData = dataMocked.USER_PERFORMANCE;
  const currentRoute = useParams();
  const perfomanceID = currentRoute.id;

  // init activity
  const currentPerformance = performanceData.find(
    (user) => user.userId == perfomanceID
  ); // ??? id is an integer but waiting for a string
  const dataPerf = currentPerformance.data;

  return dataPerf;
};
