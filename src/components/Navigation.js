import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => (
  <nav>

    <Link to="/user"
      className="todo-app">
      TODO APP
      </Link>
    <Link to="/" activeClassName="selected">
      Logout
          </Link>

  </nav>
);

export default Navigation;
