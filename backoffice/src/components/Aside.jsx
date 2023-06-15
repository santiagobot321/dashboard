import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faBoxesStacked, faChartBar, faCog, faHouse } from "@fortawesome/free-solid-svg-icons";
import "../styles/Aside_styles.css";

const Aside = () => {
  return (
    <aside className="aside">
      <nav className="aside-nav">
        <ul className="aside-nav-list">
        <li className="aside-nav-item">
            <a href="#">
              <FontAwesomeIcon icon={faHouse} /> Dashboard
            </a>
          </li>

          <li className="aside-nav-item">
            <a href="#">
              <FontAwesomeIcon icon={faBoxesStacked} /> Productos
            </a>
          </li>
          <li className="aside-nav-item">
            <a href="#">
              <FontAwesomeIcon icon={faChartBar} /> Ventas
            </a>
          </li>
          <li className="aside-nav-item">
            <a href="#">
              <FontAwesomeIcon icon={faCog} /> Configuración
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Aside;
