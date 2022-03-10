// React
import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <div className="not-found">
      <span>404</span>
      <h1>Oups! La page que vous demandez n'existe pas.</h1>
      <Link to="/" className="error-link">
        Retourner sur la page d'accueil
      </Link>
    </div>
  );
};

export default Error;
