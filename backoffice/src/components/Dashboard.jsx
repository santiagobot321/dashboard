import React from "react";
import "../styles/Dashboard_styles.css";
import Header from "./Header";
import Aside from "./Aside";
import MasVend from "./MasVend";
import PedidosReal from "./PedidosReal";
import PrecioPom from "./PrecioPom";
import TotalIngre from "./TotalIngre";
import TotalProducts from "./TotalProducts";

const Dashboard = () => {
  return (
    <>
      <Header />
      <main className="dashboard-container">
        <Aside />
        <section className="dashboard-metrics">
          <article className="metric-card">
            <MasVend />
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
