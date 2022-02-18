import React from 'react';
import USER_MAIN_DATA from './../fetch/userMock';

import Hello from '../components/Hello';
import { Navigate, useParams } from 'react-router-dom';

const Profil = () => {
  console.log(USER_MAIN_DATA.USER_MAIN_DATA);
  const currentRouteParams = useParams();
  const userMockId = currentRouteParams.id;

  // init accomodation
  const currentUser = USER_MAIN_DATA.USER_MAIN_DATA.find(
    (user) => user.id === userMockId
  );
  // if wrong accomodaton URL
  if (!currentUser) {
    return <Navigate to="profil-not-found" />;
  }
  return (
    <div className="profil">
      <Hello />
    </div>
  );
};

export default Profil;
