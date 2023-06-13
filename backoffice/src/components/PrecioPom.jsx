import React, { useState, useEffect } from 'react';
import fetchProductos from '../data/products';

const PrecioProm = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    fetchProductos()
      .then(datos => {
        setProductos(datos);
      });
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

  const precioPromedio = calcularPrecioPromedio();

  return (
    <div>
      <h1>Precio promedio de los productos</h1>
      <p>{precioPromedio.toFixed(2)}</p>
    </div>
  );
};

export default PrecioProm;
