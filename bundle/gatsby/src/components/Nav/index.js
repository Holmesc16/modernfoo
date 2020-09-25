import React from 'react';
import { Link } from 'gatsby';

const Nav = () => (
  <nav>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/About">About</Link>
      </li>
      <li>
        <Link to="/Merch">Merch</Link>
      </li>
      <li>
        <Link to="/Order">Order</Link>
      </li>
      <li>
        <Link to="/Fools">Fools</Link>
      </li>
    </ul>
  </nav>
);

export default Nav;
