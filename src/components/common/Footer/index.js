import React from "react";

import "./Footer.scss";

const Footer = () => (
  <footer>
    <div className="footer__container">
      <div className="footer__nav">
        <ul>
          <li>Terms and Conditions</li>
          <li>Privacy Policy</li>
          <li>Contact Us</li>
        </ul>
      </div>
      <div className="footer__socials">
        <p>Fallow Us</p>
        <i className="fab fa-facebook-square"></i>
        <i className="fab fa-twitter"></i>
      </div>
    </div>
  </footer>
);

export default Footer;
