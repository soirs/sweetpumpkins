// Header.js

import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => (
  <header className="header">
    <Link to="/">
      <h1>Movie lookup</h1>
    </Link>
  </header>
)

export default Header;
      //<h1>Sweet Pumpkins - recreated by Frank Semakula</h1>
