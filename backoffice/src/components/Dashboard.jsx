import React from "react";
import "../styles/Dashboard_styles.css";
import Header from "./Header";
import Aside from "./Aside";
import MasVend from "./MasVend";
import PedidosReal from "./PedidosReal";
import PrecioPom from "./PrecioPom";
import TotalIngre from "./TotalIngre";
import TotalProducts from "./TotalProducts";
import '../styles/MasVend_styles.css'

const Dashboard = () => {
  return (
    <>
      <Header />
      <main className="dashboard-container">
        <Aside />
        <section className="dashboard-metrics">
          <article className="metric-card">
            <span>
              <MasVend />
            </span>
          </article>
          <article className="metric-card">
            <TotalIngre />
          </article>
          <article className="metric-card">
            <PedidosReal />
          </article>
          <article className="metric-card">
            <PrecioPom />
          </article>
          <article className="metric-card">
            <TotalProducts />
          </article>
        </section>
      </main>
    </>
  );
};

export default Dashboard;
