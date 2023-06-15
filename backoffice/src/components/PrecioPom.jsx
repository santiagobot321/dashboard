import React, { useState, useEffect } from 'react';
import fetchData from "../data/api";

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
    <>
      <h1>Precio promedio de los productos</h1>
      <p>{precioPromedio.toFixed(2)}</p>
    </>
  );
};

export default PrecioProm;
