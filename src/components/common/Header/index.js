import React from 'react';
import { Link } from 'react-router-dom';

import './Header.scss';

const Header = () => (
  <header>
    <nav className="main__navbar">
      <h1 className="main__title">
        <Link to="/">Rule of Thumb</Link>
      </h1>
      <ul className="main__menu">
        <li className="menu__item">
          <Link to="/past-trials">Past Trials</Link>
        </li>
        <li className="menu__item">
          <Link to="/how-it-works">How It Works</Link>
        </li>
        <li className="menu__item">
          <Link to="/">Log In / Sign Up</Link>
        </li>
        <li className="menu__item">
          <i className="fas fa-search"></i>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
