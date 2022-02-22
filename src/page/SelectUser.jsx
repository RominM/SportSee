import React from 'react';
import { Link } from 'react-router-dom';
import data from '../service/dataUsersMocked';

const SelectUser = () => {
  return (
    <>
      <section className="users">
        {data.USER_MAIN_DATA.map((user) => (
          <Link to={'Acceuil/' + user.id} key={user.id}>
            <li className="card">
              <span>{user.userInfos.firstName}</span>
            </li>
          </Link>
        ))}
      </section>
    </>
  );
};

export default SelectUser;
