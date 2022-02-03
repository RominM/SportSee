import React from 'react';
import './hello.css';

const Hello = () => {
  return (
    <div className="hello">
      <h2 className="h2">
        Bonjour <span>Utilisateur</span>
      </h2>
      <p className="congrat">
        Félicitation ! Vous avez explosé vos objectifs hier 👏
      </p>
    </div>
  );
};

export default Hello;
