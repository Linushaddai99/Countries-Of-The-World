import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    <Link to="/">
      <h2 className="header">Where in the World</h2>
    </Link>
  </header>
);

export default Header;
