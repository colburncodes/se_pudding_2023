import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/love_logo.jpg";
import "./Header.css";

export function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <Link to={"/"}>
          <img className="header__logo" src={logo} alt="Serendipity Logo" />
        </Link>
        <h1 className="header__title">Header Component</h1>
      </div>
    </header>
  );
}
