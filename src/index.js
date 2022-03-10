import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';

import Error from './page/Error';
import Sidebar from './components/layout/Sidebar';
import Header from './components/layout/Header';

import './style/reset.css';
import './style/sass/master.scss';
import Home from './page/Home';
import SelectUser from './page/SelectUser';

const BlockPage = styled.article`
  position: absolute;
  top: 15%;
  left: 15%;
`;

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header />
      <BlockPage>
        <Routes>
          <Route path="/" element={<SelectUser />} />
          <Route path="/user/:id/" element={<Home />} />
          <Route path="/*" element={<Error />} />
        </Routes>
      </BlockPage>
      <Sidebar />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
