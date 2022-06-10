// React
import React from 'react';
import { PropTypes } from 'prop-types';

const Analytics = (props) => {
  return (
    <div className="analytics">
      <img
        src={props.iconSrc}
        alt={props.iconAlt}
        className={`${props.iconAlt}`}
      />
      <div>
        <strong>{props.compoValue}</strong>
        <br />
        <span>{props.compoType}</span>
      </div>
    </div>
  );
};

export default Analytics;
// Proptypes
Analytics.propTypes = {
  props: PropTypes.object
};
