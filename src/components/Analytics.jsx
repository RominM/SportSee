// React
import React from 'react';

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
