import USER_PERFORMANCE from './userMock';

/**
 * This function gets the data to be used in the RadarChart.
 * @param {userId} id : The id of the user.
 * @returns The data wanted.
 */
export async function getPerformanceData(userId) {
  const performanceData = USER_PERFORMANCE.find(
    (item) => item.userId === Number(userId)
  );
  return performanceData;
}
