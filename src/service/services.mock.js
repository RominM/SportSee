import {
  USER_MAIN_DATA,
  USER_ACTIVITY,
  USER_AVERAGE_SESSIONS,
  USER_PERFORMANCE,
} from './dataUsersMocked.js';

export const getMainData = async (id) => {
  const userData = USER_MAIN_DATA.find((item) => item.id === Number(id));
  return userData;
};

// const currentUser = UserData.find((user) => user.id == userId); // ??? id is an integer but waiting for a string

export const getActivityData = async (userId) => {
  const activityData = USER_ACTIVITY.find((item) => item.id === Number(userId));
  return activityData;
};

export const getAverageData = async (userId) => {
  const averageData = USER_AVERAGE_SESSIONS.find(
    (item) => item.id === Number(userId)
  );
  return averageData;
};

export const getPerformanceData = async (userId) => {
  const perfomranceData = USER_PERFORMANCE.find(
    (item) => item.id === Number(userId)
  );
  return perfomranceData;
};
