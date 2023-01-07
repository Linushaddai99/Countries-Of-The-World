import React from 'react';
import { Link } from 'react-router-dom';

const HomeHeader = () => (
  <header>
    <Link to="/">
      <h3 className="header">
        {'<'}
      </h3>
    </Link>
    <h2>Countries Of The World</h2>
    <div className="icons">
      <span className="material-symbols-outlined icon">keyboard_voice</span>
      <span className="material-symbols-outlined icon">settings</span>
    </div>
  </header>
);

export default HomeHeader;
