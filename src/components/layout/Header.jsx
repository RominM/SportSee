// React
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
// Tools
import Logo from './../../assets/images/logo.svg';

const Header = () => {
  return (
    <header className="header">
      <nav className="header__nav">
        <Link to="/user/:id" className="logo">
          <img src={Logo} alt="logo" />
        </Link>
        <h1>SportSee</h1>
        <ul className="header-ul">
          <li>
            <NavLink
              to="/user/:id"
              className={({ isActive }) => (isActive ? 'active' : 'inactive')}
            >
              Accueil
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Profil"
              className={({ isActive }) => (isActive ? 'active' : 'inactive')}
            >
              Profil
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/setting"
              className={({ isActive }) => (isActive ? 'active' : 'inactive')}
            >
              Réglage
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/community"
              className={({ isActive }) => (isActive ? 'active' : 'inactive')}
            >
              Communauté
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
