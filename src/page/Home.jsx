import React from 'react';
import Hello from '../components/hello/Hello';
import Header from '../components/layout/Header';
import Sidebar from '../components/sidebar/Sidebar';
import './home.css';

const Home = () => {
  return (
    <div className="home">
      <Header />
      <Hello />
      <Sidebar />
    </div>
  );
};

export default Home;
