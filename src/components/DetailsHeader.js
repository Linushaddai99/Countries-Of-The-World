import React from 'react';
import { Link } from 'react-router-dom';

const DetailsHeader = () => (
  <header>
    <Link to="/">
      <span className="back">
        {'<'}
        Back to countries
      </span>
    </Link>
    <div className="icons">
      <span className="material-symbols-outlined icon">keyboard_voice</span>
      <span className="material-symbols-outlined icon">settings</span>
    </div>
  </header>
);

export default DetailsHeader;
