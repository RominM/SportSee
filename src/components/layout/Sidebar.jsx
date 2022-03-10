// React
import React, { useEffect, useState } from 'react';
// Service
import { Service } from '../../service/Service';
// Tools
import Zen from './../../assets/images/zen.svg';
import Swim from './../../assets/images/swim.svg';
import Ride from './../../assets/images/ride.svg';
import Weight from './../../assets/images/weight.svg';

const Sidebar = () => {
  const [dataFromService, setDataFromService] = useState(null);
  const [origin, setOrigin] = useState('mock');

  useEffect(() => {
    async function getSwitch(id) {
      const response = await new Service(origin).getUserService(id);
      setDataFromService(response);
    }
    getSwitch();
  });
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
          {dataFromService && (
            <>
              <button
                onClick={() => setOrigin(origin === 'mock' ? 'api' : 'mock')}
              >
                {dataFromService}
              </button>
            </>
          )}
        </ul>
        <span className="copyright">Copyright, SportSee2020</span>
      </nav>
    </div>
  );
};

export default Sidebar;
