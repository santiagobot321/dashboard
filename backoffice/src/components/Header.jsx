import React from "react";
import "../styles/Header_styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <header className="header">
      <h1 className="header-title">Mi Dashboard</h1>
      <nav className="header-nav">
        <ul className="header-nav-list">
          <li className="header-nav-item">
            <a href="#">
                <FontAwesomeIcon icon={faSignOutAlt} /> Salir
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
