import React from "react";
import "../styles/Dashboard_styles.css";
import MasVend from "./MasVend";
import PedidosReal from "./PedidosReal";
import PrecioPom from "./PrecioPom";
import TotalIngre from "./TotalIngre";
import TotalProducts from "./TotalProducts";
import Header from "./Header";
import Aside from "./Aside";

const Dashboard = () => {
  return (
    <>
      <Header />
      <Aside />
      <MasVend />
      <PedidosReal />
      <PrecioPom />
      <TotalIngre />
      <TotalProducts />
    </>
  );
};

export default Dashboard;
