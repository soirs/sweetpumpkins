// Footer.js

import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="footer">
    <Link to="https://sweetpumpkins.codecamps.com/">
      <h3>Based on CodeCamps.com SweetPumpkins tutorial</h3>
    </Link>
    <Link to="https://www.themoviedb.org/documentation/api">
      <h3>Using themoviedb.org API</h3>
    </Link>
  </footer>
)

export default Footer;
      //<h1>Sweet Pumpkins - recreated by Frank Semakula</h1>
