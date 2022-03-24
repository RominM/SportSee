// React
import React from 'react';
import { PropTypes } from 'prop-types';

const Hello = ({ currentUser }) => {
  const userData = currentUser.userInfos;

  return (
    <div className="hello">
      <h2 className="hello--user">
        Bonjour <span>{userData.firstName}</span>
      </h2>
      <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
    </div>
  );
};

export default Hello;

Hello.propTypes = {
  currentUser: PropTypes.object.isRequired,
};
