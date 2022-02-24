import React from 'react';

const Analytics = (props) => {
  return (
    <div id={props.compoId} className="analytics">
      <img
        src={props.iconSrc}
        alt={props.iconAlt}
        className={`${props.iconAlt}`}
      />
      <div>
        <span className="analyticsRightValue">{props.compoValue}</span>
        <span className="analyticsRightType">{props.compoType}</span>
      </div>
    </div>
  );
};

export default Analytics;
