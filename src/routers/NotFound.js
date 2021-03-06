import React from 'react';

import friend from '../images/friend.png';

import Navigation from '../components/Navigation';

const NotFound = () => (
  <>
  <Navigation></Navigation>
  <div className="empty-screen">
    <img src={friend} alt="friend"></img>
    <p>Use the form to create a new todo!</p>
  </div>
  </>
);

export default NotFound;
