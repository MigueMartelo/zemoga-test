import React from 'react';
import { Link } from 'react-router-dom';

import './Header.scss';

const Header = () => (
  <header>
    <nav className="main__navbar">
      <input type="checkbox" id="menu__hambur" />
      <label htmlFor="menu__hambur" className="check__menu">
        <i className="fas fa-bars"></i>
      </label>
      <h1 className="main__title" data-testid="main-title">
        <Link to="/">Rule of Thumb</Link>
      </h1>
      <ul className="main__menu" data-testid="nav-items">
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
