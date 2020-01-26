import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => (
  <nav>
    <NavLink to="/"
    id = "title">
      TODO APP
    </NavLink>
    <ul>
      <li>
        <NavLink to="/" activeClassName="selected">
          Home
          </NavLink>
      </li>
      <li>
        <NavLink to="/news" activeClassName="selected">
          News
          </NavLink>
      </li>
    </ul>
  </nav>
);

export default Navigation;
