import React, { useState, useEffect } from 'react';
import fetchPedidos from '../data/pedidos';
import fetchProducts from '../data/products';

const TotalIngre = () => {
  const [pedidos, setPedidos] = useState([]);
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    fetchPedidos()
      .then(data => {
        setPedidos(data);
      });
  }, []);

  useEffect(() => {
    fetchProducts()
      .then(datos => {
        setProductos(datos);
      });
  }, []);

  const calcularIngresosTotales = () => {
    let ingresosTotales = 0;

    pedidos.forEach(pedido => {
      pedido.products.forEach(producto => {
        const productId = producto.productId;
        const cantidad = producto.quantity;
        const productoEncontrado = productos.find(p => p.id === productId);

        if (productoEncontrado) {
          ingresosTotales += productoEncontrado.price * cantidad;
        }
      });
    });

    return ingresosTotales;
  };

  const ingresosTotales = calcularIngresosTotales();

  return (
    <div>
      <h1>Ingresos totales</h1>
      <p>{ingresosTotales.toFixed(2)}</p>
    </div>
  );
};

export default TotalIngre;
