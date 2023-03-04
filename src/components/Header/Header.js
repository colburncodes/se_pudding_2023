import React from "react";
import logo from "../../images/header_logo.png";
import "./Header.css";

export function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <img className="logo" src={logo} alt="speed-dating-logo" />
      </div>
    </header>
  );
}
