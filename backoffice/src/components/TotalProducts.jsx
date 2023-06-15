import React, { useState, useEffect } from 'react';
import fetchData from "../data/api";
import '../styles/Metrics_styles.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDollyBox } from "@fortawesome/free-solid-svg-icons";

const TotalProducts = () => {
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

  if (loading) {
    return <h2>Espera un momento...</h2>;
  }

  if (productos.length === 0) {
    return <h1>Llamar a proveedores. Ya no hay más productos</h1>;
  }
  
  const numProductos = productos[productos.length - 1];

  return (
    <section className='container'>
      <h1 className='title'>
      <FontAwesomeIcon icon={faDollyBox} />Total de productos de la tienda</h1>
      <p className="amount">{numProductos.id}</p>
    </section>
  );  
}

export default TotalProducts;
