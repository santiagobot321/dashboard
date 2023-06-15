import React, { useState, useEffect } from 'react';
import fetchData from "../data/api";
import '../styles/Metrics_styles.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSackDollar } from "@fortawesome/free-solid-svg-icons";

const TotalIngre = () => {
  const [loading, setLoading] = useState(true);
  const [pedidos, setPedidos] = useState([]);
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const fetchAllData = async () => {
      const productsData = await fetchData('https://fakestoreapi.com/products');
      const pedidosData = await fetchData('https://fakestoreapi.com/carts');

      setProductos(productsData);
      setPedidos(pedidosData);
      setLoading(false);
    };

    fetchAllData();
  }, []);

  const calcularIngresosTotales = () => {
    let ingresosTotales = 0;

    pedidos.forEach((pedido) => {
      pedido.products.forEach((producto) => {
        const productId = producto.productId;
        const cantidad = producto.quantity;
        const productoEncontrado = productos.find((p) => p.id === productId);

        if (productoEncontrado) {
          ingresosTotales += productoEncontrado.price * cantidad;
        }
      });
    });

    return ingresosTotales;
  };

  if (loading) {
    return <h2>Espera un momento...</h2>;
  }

  const ingresosTotales = calcularIngresosTotales();

  return (
    <section className="container">
      <h1 className="title">
        <FontAwesomeIcon icon={faSackDollar} /> Ingresos totales
      </h1>
      <p className="amount">$ {ingresosTotales.toFixed(2)}</p>
    </section>
  );
};

export default TotalIngre;
