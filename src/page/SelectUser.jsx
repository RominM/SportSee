import React from 'react';
import { Link } from 'react-router-dom';
import data from '../service/data-mocked';
import logo from './../assets/images/logo.svg';

const SelectUser = () => {
  return (
    <>
      <section className="users">
        {data.USER_MAIN_DATA.map((user) => (
          <Link to={'user/' + user.id} key={user.id}>
            <li className="card">
              <img src={logo} alt="logo" />
            </li>
            <span className="userName">{user.userInfos.firstName}</span>
          </Link>
        ))}
      </section>
    </>
  );
};

export default SelectUser;
