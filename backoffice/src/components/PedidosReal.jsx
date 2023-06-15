import React, { useState, useEffect } from 'react';
import fetchData from '../data/api';
import '../styles/Metrics_styles.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const PedidosReal = () => {
  const [loading, setLoading] = useState(true);
  const [pedidos, setPedidos] = useState([]);

  useEffect(() => {
    const fetchAllData = async () => {
      const pedidosData = await fetchData('https://fakestoreapi.com/carts');
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
    <section className='container'>
      <h1 className='title'>
      <FontAwesomeIcon icon={faCartShopping} /> Número de pedidos hasta el momento</h1>
      <p className='amount'>{ultimoPedido.id}</p>
    </section>
  );
};

export default PedidosReal;
