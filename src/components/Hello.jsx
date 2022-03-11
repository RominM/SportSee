// React
import React, { useEffect, useState } from 'react';
import { service } from '../service/Service';

const Hello = () => {
  const [userName, setUserName] = useState([]);

  useEffect(() => {
    const getFirstName = async () => {
      const mainUser = await service.getMainData();
      setUserName(mainUser);
    };
    getFirstName();
  }, []);

  const userData = userName.userInfos;

  // if (!userData.firstName) {
  //   return null;
  // }
  return userData ? (
    <div className="hello">
      <h2 className="hello--user">
        Bonjour <span>{userData.firstName}</span>
      </h2>
      <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
    </div>
  ) : (
    <></>
  );
};

export default Hello;

Hello.PropType = {};
