// React
import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Redirect,
  Navigate,
} from 'react-router-dom';
// Components
import Header from './components/layout/Header';
import Sidebar from './components/layout/Sidebar';
import Home from './page/Home';
import Error from './page/Error';
// Style
import './style/reset.css';
import './style/sass/master.scss';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" exact element={<Navigate replace to="/user/12" />} />

        <Route path="/user/:id/" element={<Home />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Sidebar />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
