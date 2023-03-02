import React from "react";
import "./Nav.css";
import logo from "../../images/header_logo.png";
import intro from "../../images/intro_icon.svg";
import piechart from "../../images/pie-chart.svg";
import columnchart from "../../images/chart-column.svg";
import stackedchart from "../../images/chart-column-stacked.svg";

export function Nav() {
  return (
   <nav className="nav">
    <ul className="nav__lists">

    <li class="nav__list">
      
       <a href="#i" class="nav__link">
          <img className="nav__link_header" src={logo} alt="speed-dating-logo"/>
        </a>
      </li>

      <li class="nav__list">
        <a href="#introduction" class="nav__link">
          <img className="nav__link-icon" src={intro} alt="speed-dating-logo"/>
          Introduction
        </a>
      </li>
      
      <li class="nav__list">
        <a href="#racechart" class="nav__link">
          <img className="nav__link-icon" src={piechart} alt="speed-dating-logo"/>
          Race Chart
        </a>
      </li>

      <li class="nav__list">
        <a href="#selfgrading" class="nav__link">
        <img className="nav__link-icon" src={columnchart} alt="speed-dating-logo"/>
          Self Grading Chart
        </a>
      </li>

      <li class="nav__list">
        <a href="#attribute" class="nav__link">
        <img className="nav__link-icon" src={stackedchart} alt="speed-dating-logo"/>
          Atrribute Chart
        </a>
      </li>

      <li class="nav__list">
        <a href="#footer" class="nav__link footer__link">
          Footer
        </a>
      </li>  
    </ul>
   </nav>
  );
}
