import React from 'react';
import Zen from './../../assets/images/zen.svg';
import Swim from './../../assets/images/swim.svg';
import Ride from './../../assets/images/ride.svg';
import Weight from './../../assets/images/weight.svg';
import './sidebar.css';

const Sidebar = () => {
  return (
    <div>
      <nav className="sidebar__nav">
        <ul className="ul-side">
          <li className="li-side">
            <img src={Zen} alt="zen" />
          </li>
          <li className="li-side">
            <img src={Swim} alt="swim" />
          </li>
          <li className="li-side">
            <img src={Ride} alt="ride" />
          </li>
          <li className="li-side">
            <img src={Weight} alt="weight" />
          </li>
        </ul>
        <span className="copyright">Copyright, SportSee2020</span>
      </nav>
    </div>
  );
};

export default Sidebar;