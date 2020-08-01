import React from "react";

import "./Header.scss";

const Header = () => (
  <header>
    <nav className="main__navbar">
      <h1 className="main__title">Rule of Thumb</h1>
      <ul className="main__menu">
        <li className="menu__item">Past Trials</li>
        <li className="menu__item">How It Works</li>
        <li className="menu__item">Log In / Sign Up</li>
        <li className="menu__item">
          <i className="fas fa-search"></i>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
