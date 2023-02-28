import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.jpeg";
import "./Header.css";

export function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <h1 class="header__title">About the </h1>
        <Link to={"/"}>
        <img className="logo" src={logo} alt="speed-dating-logo"/>
        </Link>
       </div>
    </header>
  );
}
