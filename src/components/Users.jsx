import React from 'react';
import { Link } from 'react-router-dom';

const users = () => {
  return (
    <section className="users">
      <ul>
        <li style={{ color: 'red' }}>
          <Link to="/profil">users</Link>
        </li>
      </ul>
    </section>
  );
};

export default users;
