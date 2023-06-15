import React, { useState, useEffect } from 'react';
import fetchData from "../data/api";
import '../styles/Metrics_styles.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDollarSign } from "@fortawesome/free-solid-svg-icons";

const PrecioProm = () => {
  const [loading, setLoading] = useState(true);
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const fetchAllData = async () => {
      const productsData = await fetchData('https://fakestoreapi.com/products');
      setProductos(productsData);
      setLoading(false);
    };
    fetchAllData();
  }, []);

  const calcularPrecioPromedio = () => {
    if (productos.length === 0) {
      return 0;
    }

    const totalPrecios = productos.reduce((total, producto) => {
      return total + producto.price;
    }, 0);

    return totalPrecios / productos.length;
  };

  if (loading) {
    return <h2>Espera un momento...</h2>;
  }

  const precioPromedio = calcularPrecioPromedio();

  return (
    <section className='container'>
      <h1 className='title'>
      <FontAwesomeIcon icon={faDollarSign} /> Precio promedio de los productos</h1>
      <p className='amount'>$ {precioPromedio.toFixed(2)}</p>
    </section>
  );
};

export default PrecioProm;
