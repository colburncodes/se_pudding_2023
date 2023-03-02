import React from "react";
import "./Nav.css";
import logo from "../../images/header_logo.png";
import piechart from "../../images/pie-chart.svg";
import columnchart from "../../images/chart-column.svg";
import stackedchart from "../../images/chart-column-stacked.svg";

export function Nav() {
  return (
    <nav className="nav">
      <ul className="nav__lists">
        <li className="nav__list">
          <a href="#i" className="nav__link">
            <img
              className="nav__link_header"
              src={logo}
              alt="speed-dating-logo"
            />
          </a>
        </li>
        <li className="nav__list">
          <a href="#racechart" className="nav__link">
            <img
              className="nav__link-icon"
              src={piechart}
              alt="speed-dating-logo"
            />
            Ethnicity
          </a>
        </li>

        <li className="nav__list">
          <a href="#selfgrading" className="nav__link">
            <img
              className="nav__link-icon"
              src={columnchart}
              alt="speed-dating-logo"
            />
            Self Grade
          </a>
        </li>

        <li className="nav__list">
          <a href="#attribute" className="nav__link">
            <img
              className="nav__link-icon"
              src={stackedchart}
              alt="speed-dating-logo"
            />
            Atrributes
          </a>
        </li>
      </ul>
    </nav>
  );
}
