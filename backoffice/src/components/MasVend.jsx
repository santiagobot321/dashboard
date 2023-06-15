import React, { useState, useEffect } from 'react';
import fetchData from '../data/api';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRankingStar } from "@fortawesome/free-solid-svg-icons";

const MasVend = () => {
  const [loading, setLoading] = useState(true);
  const [pedidos, setPedidos] = useState([]);
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const fetchAllData = async () => {
      setLoading(true);

      const productsData = await fetchData('https://fakestoreapi.com/products');
      const pedidosData = await fetchData('https://fakestoreapi.com/carts');

      setProductos(productsData);
      setPedidos(pedidosData);
      setLoading(false);
    };

    fetchAllData();
  }, []);

  const obtenerProductosMasVendidos = () => {
    const productosMasVendidos = {};

    pedidos.forEach((pedido) => {
      pedido.products.forEach((producto) => {
        const productId = producto.productId;

        if (productosMasVendidos[productId]) {
          productosMasVendidos[productId].cantidadVentas += producto.quantity;
        } else {
          productosMasVendidos[productId] = {
            cantidadVentas: producto.quantity,
            nombre: getProductNombre(productId),
          };
        }
      });
    });

    const productosOrdenados = [];

    for (let productId in productosMasVendidos) {
      productosOrdenados.push({
        productId,
        cantidadVentas: productosMasVendidos[productId].cantidadVentas,
        nombre: productosMasVendidos[productId].nombre,
      });
    }

    for (let i = 0; i < productosOrdenados.length - 1; i++) {
      let maxIndex = i;
      for (let j = i + 1; j < productosOrdenados.length; j++) {
        if (
          productosOrdenados[j].cantidadVentas >
          productosOrdenados[maxIndex].cantidadVentas
        ) {
          maxIndex = j;
        }
      }
      if (maxIndex !== i) {
        [productosOrdenados[i], productosOrdenados[maxIndex]] = [
          productosOrdenados[maxIndex],
          productosOrdenados[i],
        ];
      }
    }

    const productosTop = productosOrdenados.slice(0, 3);

    return productosTop;
  };

  const getProductNombre = (productId) => {
    const producto = productos.find((producto) => producto.id === productId);
    return producto ? producto.title : 'Nombre desconocido';
  };

  const productosMasVendidos = obtenerProductosMasVendidos();

  if (loading) {
    return <h2>Espera un momento...</h2>;
  }

  if (pedidos.length === 0) {
    return <h1 className="title">No hay pedidos aún</h1>;
  }

  return (
    <section className="card">
      <section className="product-card">
        <h2 className="title">
        <FontAwesomeIcon icon={faRankingStar} /> Productos más vendidos</h2>
        <ul className="product-list">
          {productosMasVendidos.map((producto) => (
            <li key={producto.productId} className="product-info">
              <span className="product-name">{producto.nombre}</span>
              <span className="product-sales">{producto.cantidadVentas} vendidos</span>
            </li>
          ))}
        </ul>
      </section>
    </section>
  );
};

export default MasVend;
