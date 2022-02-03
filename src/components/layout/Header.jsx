import React from 'react';
import Logo from './../../assets/images/logo.svg';
import './header.css';

const Header = () => {
  return (
    <header className="header">
      <nav className="header__nav">
        <div className="logo">
          <img src={Logo} alt="logo" />
        </div>
        <h1>SportSee</h1>
        <ul className="header-ul">
          <li>Accueil</li>
          <li>Profil</li>
          <li>Réglage</li>
          <li>Communauté</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
