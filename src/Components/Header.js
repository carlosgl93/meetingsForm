import React from "react";
import { Link } from "react-router-dom";
import "../Css/Header.css"

function Header() {
  return (
    <nav className="header">
      <Link to="/">
        <img
          className="header__logo"
          src="https://pixelcode.cl/images/logo-horizontal.png"
          alt="Pixel Code logo"
        />
      </Link>
      <h2 className="header__title">Networking Forms</h2>
    </nav>
  );
}

export default Header;
