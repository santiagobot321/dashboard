import React from "react";
import "../styles/Aside_styles.css";

const Aside = () => {
  return (
    <aside className="aside">
      <nav className="aside-nav">
        <ul className="aside-nav-list">
          <li className="aside-nav-item"><a href="#">Usuarios</a></li>
          <li className="aside-nav-item"><a href="#">Productos</a></li>
          <li className="aside-nav-item"><a href="#">Ventas</a></li>
        </ul>
      </nav>
    </aside>
  );
};

export default Aside;
