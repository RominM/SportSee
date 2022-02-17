import React from 'react';
import Hello from '../components/Hello';
import Header from '../components/layout/Header';
import Sidebar from '../components/layout/Sidebar';

const Profil = (props) => {
  return (
    <div className="profil">
      <Header />
      <Hello />
      <Sidebar />
    </div>
  );
};

export default Profil;
