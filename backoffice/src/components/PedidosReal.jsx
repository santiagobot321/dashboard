import React, { useState, useEffect, useSyncExternalStore } from "react";

import fetchData from "../data/api";

const PedidosReal = () => {
  const [pedidos, setPedidos] = useState([]);

  useEffect(() => {
    const fetchAllData = async () => {
      const pedidosData = await fetchData('https://fakestoreapi.com/carts');
      setPedidos(pedidosData);
    };

    fetchAllData();
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
