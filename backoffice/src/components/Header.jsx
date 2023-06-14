import React from "react";
import "../styles/Header_styles.css";

const Header = () => {
  return (
    <header className="header">
      <h1 className="header-title">Mi Dashboard</h1>
      <nav className="header-nav">
        <ul className="header-nav-list">
          <li className="header-nav-item"><a href="#">Inicio</a></li>
          <li className="header-nav-item"><a href="#">Estadísticas</a></li>
          <li className="header-nav-item"><a href="#">Salir</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

