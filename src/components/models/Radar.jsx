import { useEffect, useState } from 'react';

/* ACCESS TO DATA */
// Access to mocked data in the file "src/services/data.js"
import { getPerformanceData } from './../../fetch/services.mock';

// Access to "real" data in the backend API
// import { getPerformanceData } from '../services/services';

// ACCESS TO NECESSARY COMPONENTS FROM THE LIBRARY "RECHARTS"
import {
  RadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

function RadarData(props) {
  const [performanceData, setPerformanceData] = useState([]);
  const [kinds, setKinds] = useState({});

  // Use of "AbortController()" to prevent memory leaks
  useEffect(() => {
    //let abortController = new AbortController()
    async function init() {
      const perfData = await getPerformanceData(props.id);
      setPerformanceData(perfData.data);
      setKinds(perfData.kind);
    }
    init();
    /*return () => {
            abortController.abort()
        }*/
  }, [props.id]);

  // This reverses the order of the data, to get it from last to first.
  const performanceDataReverse = [...performanceData].sort(
    (a, b) => b.kind - a.kind
  );

  /**
   * FUNCTION TO IMPROVE BECAUSE PROVOKING BUGS !
   * This function, when used with the following one, takes the strings in "kinds"
   * and puts in capital the first letter of each string.
   * @function capitalFirstLetter
   * @param {string} str : The string to transform.
   * @returns The same string with a capital letter.
   */
  /*const capitalFirstLetter = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1)
        //return str[0].toUpperCase() + str.slice(1)
    }*/

  /**
   * This function gets the names of the data coming from the hook "useEffect()" in "setKinds()".
   * @param {index} index
   * @returns
   */
  const getTheme = (index) => {
    /*const capKinds = capitalFirstLetter(kinds[index])
        return capKinds*/
    return kinds[index];
  };

  /**
   * This function gives to the tooltip (visible when the user hovers on the chart) a customized style for its content,
   * which is the names and the values of the data.
   */
  const customTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div
          style={{
            background: 'white',
            color: 'black',
            fontSize: 10,
            fontWeight: 500,
            textAlign: 'center',
            padding: 5,
          }}
        >
          <p>{`${kinds[payload[0].payload.kind]} : ${payload[0].value}`}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div id="radar" className="anaItem">
      <ResponsiveContainer width="97%" height={263}>
        <RadarChart
          data={performanceDataReverse}
          margin={{ top: 35, right: 35, bottom: 35, left: 35 }}
          className="graphCenter"
        >
          <PolarGrid radialLines={false} />
          <PolarAngleAxis
            dataKey="kind"
            fontSize={12}
            tickFormatter={getTheme}
            tickLine={false}
            stroke="white"
          />
          <Radar dataKey="value" fill="rgb(255, 1, 1)" fillOpacity={0.7} />
          <Tooltip
            content={customTooltip}
            cursor={{ stroke: 'white', strokeOpacity: 0.2, strokeWidth: 10 }}
            offset={30}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default RadarData;
