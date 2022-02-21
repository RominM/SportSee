import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Error from './page/Error';
import Sidebar from './components/layout/Sidebar';
import Header from './components/layout/Header';

import './style/reset.css';
import './style/sass/main.scss';
import Home from './page/Home';
// import ProfilNotFound from './page/ProfilNotFound';
import SelectUser from './page/SelectUser';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header />
      <div className="block-page">
        <Routes>
          <Route path="/" element={<SelectUser />} />
          <Route path="/Acceuil/:id/" element={<Home />} />
          {/* <Route path="/not-found" element={<ProfilNotFound />} /> */}
          {/* <Route path="/*" element={<Error />} /> */}
        </Routes>
      </div>
      <Sidebar />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
