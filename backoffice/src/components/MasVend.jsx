import React, { useState, useEffect } from 'react';
import fetchPedidos from '../data/pedidos';

const MasVend = () => {
  const [pedidos, setPedidos] = useState([]);

  useEffect(() => {
    fetchPedidos()
      .then(data => {
        setPedidos(data);
      });
  }, []);

  const obtenerProductosMasVendidos = () => {
    const productosMasVendidos = {};

    pedidos.forEach(pedido => {
      pedido.products.forEach(producto => {
        const productId = producto.productId;

        if (productosMasVendidos[productId]) {
          productosMasVendidos[productId] += producto.quantity;
        } else {
          productosMasVendidos[productId] = producto.quantity;
        }
      });
    });

    const productosOrdenados = [];

    for (let productId in productosMasVendidos) {
      productosOrdenados.push({
        productId,
        cantidadVentas: productosMasVendidos[productId]
      });
    }

    // Ordenar los productos sin utilizar el método sort
    for (let i = 0; i < productosOrdenados.length - 1; i++) {
      let maxIndex = i;
      for (let j = i + 1; j < productosOrdenados.length; j++) {
        if (productosOrdenados[j].cantidadVentas > productosOrdenados[maxIndex].cantidadVentas) {
          maxIndex = j;
        }
      }
      if (maxIndex !== i) {
        [productosOrdenados[i], productosOrdenados[maxIndex]] = [productosOrdenados[maxIndex], productosOrdenados[i]];
      }
    }

    const productosTop = [];

    let contador = 0;
    for (let i = 0; i < productosOrdenados.length; i++) {
      productosTop.push(productosOrdenados[i]);
      contador++;
      if (contador === 3) {
        break;
      }
    }

    return productosTop;
  };

  const productosMasVendidos = obtenerProductosMasVendidos();

  if (pedidos.length === 0) {
    return <h1>No hay pedidos aún</h1>;
  }

  return (
    <div>
      <h1>Productos más vendidos</h1>
      {productosMasVendidos.map((producto, index) => (
        <div key={producto.productId}>
          Producto: {producto.productId}, Cantidad de ventas: {producto.cantidadVentas}
        </div>
      ))}
    </div>
  );
};

export default MasVend;
