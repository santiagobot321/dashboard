import React, { useState, useEffect, useSyncExternalStore } from "react";
import fetchPedidos from "../data/pedidos";
// import '../styles/PedidosReal_styles.css'

const PedidosReal = () => {
  const [pedidos, setPedidos] = useState([]);

  useEffect(() => {
    fetchPedidos().then((data) => {
      setPedidos(data);
    });
  }, []);

  if (pedidos.length === 0) {
    return <h1>Aún no hay pedidos</h1>;
  }

  const ultimoPedido = pedidos[pedidos.length - 1];

  return (
    <>
        <h1>Número de pedidos hasta el momento</h1>
        <p>{ultimoPedido.id}</p>
    </>
  );
};

export default PedidosReal;
