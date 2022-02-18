import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Error from './page/Error';
import Sidebar from './components/layout/Sidebar';
import Header from './components/layout/Header';
import Profil from './page/Profil';

import './style/reset.css';
import './style/sass/main.scss';
import Home from './page/Home';
import ProfilNotFound from './page/ProfilNotFound';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header />
      {/* <Profil /> */}
      <div className="block-page">
        <Routes>
          <Route path="/Acceuil" element={<Home />} />
          <Route path="/Profil" element={<Profil />} />
          {/* <Route path="/Profil/not-found" element={<ProfilNotFound />} /> */}
          <Route path="/*" element={<Error />} />
        </Routes>
      </div>
      <Sidebar />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
