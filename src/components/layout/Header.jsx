// React
import React from 'react';
import { Link } from 'react-router-dom';
// Tools
import Logo from './../../assets/images/logo.svg';

const Header = () => {
  return (
    <header className="header">
      <nav className="header__nav">
        <Link to="/" className="logo">
          <img src={Logo} alt="logo" />
        </Link>
        <h1>SportSee</h1>
        <ul className="header-ul">
          <Link to="/Accueil/:id">
            <li>Accueil</li>
          </Link>
          <Link to="/Profil">
            <li>Profil</li>
          </Link>
          <Link to="/setting">
            <li>Réglage</li>
          </Link>
          <Link to="/community">
            <li>Communauté</li>
          </Link>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
