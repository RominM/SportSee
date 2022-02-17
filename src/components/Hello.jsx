import React, { useEffect, useState } from 'react';
import { getUser } from '../services/service';
import { service } from '../services/service';
import usersMocked from './../services/usersMocked.json';

const Hello = (props) => {
  class mockUsers {
    async getUsersById(id) {
      return usersMocked.find((user) => user.id === id);
    }
  }
  console.log(usersMocked.userInfos);

  return (
    <div className="hello">
      <h2 className="h2">
        Bonjour <span>{}</span>
      </h2>
      <p className="congrat">
        Félicitation ! Vous avez explosé vos objectifs hier 👏
      </p>
    </div>
  );
};

export default Hello;
