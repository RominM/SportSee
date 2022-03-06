import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Mock } from '../../service/Mock';

const Analytics = (props) => {
  return (
    <div className="analytics">
      <img
        src={props.iconSrc}
        alt={props.iconAlt}
        className={`${props.iconAlt}`}
      />
      <div>
        <strong className="analyticsRightValue">{props.compoValue}</strong>
        <br />
        <span className="analyticsRightType">{props.compoType}</span>
      </div>
    </div>
  );
};

export default Analytics;
