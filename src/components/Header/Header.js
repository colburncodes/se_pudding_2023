import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/header_logo.png";
import "./Header.css";

export function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <Link to={"/"}>
        <img className="logo" src={logo} alt="speed-dating-logo"/>
        </Link>
       </div>
    </header>
  );
}
