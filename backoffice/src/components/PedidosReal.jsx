import React, { useState, useEffect } from "react";
import fetchData from "../data/api";

const PedidosReal = () => {
  const [loading, setLoading] = useState(true);
  const [pedidos, setPedidos] = useState([]);

  useEffect(() => {
    const fetchAllData = async () => {
      const pedidosData = await fetchData("https://fakestoreapi.com/carts");
      setPedidos(pedidosData);
      setLoading(false);
    };

    fetchAllData();
  }, []);

  if (loading) {
    return <h2>Espera un momento...</h2>;
  }

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
