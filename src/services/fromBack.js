import React from 'react';

export class Api {
  constructor() {}

  getUsersById(id) {
    return fetch('http://localhost:3000/user/' + id)
      .then((reponse) => reponse.json())
      .then((jsonResponse) => jsonResponse.data);
  }
}

//TODO créer un bouton de test sur l'UI
//Connecter bouton avec la méthode getUserById(id) (classe usersMocks)
//Récupérer et afficher les data de retour

//Same avec la méthode de l'api
