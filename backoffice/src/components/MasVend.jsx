import React, { useState, useEffect } from 'react';
import fetchPedidos from '../data/pedidos';
import fetchProducts from '../data/products';

const MasVend = () => {
  const [pedidos, setPedidos] = useState([]);
  const [productos, setProductos] = useState([]);
  const [nompedido, setnompedido] = useState([])

  useEffect(() => {
    fetchPedidos()
      .then(data => {
        setPedidos(data);
      });
  }, []);

  useEffect(() => {
    fetchProducts()
    .then(datos => {
      setProductos(datos)
    })
  }, [])


  const obtenerProductosMasVendidos = () => {
    const productosMasVendidos = {};

    pedidos.forEach(pedido => {
      pedido.products.forEach(producto => {
        const productId = producto.productId;

        if (productosMasVendidos[productId]) {
          productosMasVendidos[productId].cantidadVentas += producto.quantity;
        } else {
          productosMasVendidos[productId] = {
            cantidadVentas: producto.quantity,
            nombre: getProductNombre(productId)
          };
        }
      });
    });

    const productosOrdenados = [];

    for (let productId in productosMasVendidos) {
      productosOrdenados.push({
        productId,
        cantidadVentas: productosMasVendidos[productId].cantidadVentas,
        nombre: productosMasVendidos[productId].nombre
      });
    }

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

    const productosTop = productosOrdenados.slice(0, 3);

    return productosTop;
  };

  const getProductNombre = (productId) => {
    const producto = productos.find(producto => producto.id === productId);
    return producto ? producto.nombre : 'Nombre desconocido';
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
          Producto: {producto.nombre}, Cantidad de ventas: {producto.cantidadVentas}
        </div>
      ))}
    </div>
  );
};

export default MasVend;
