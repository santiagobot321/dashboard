import React from 'react'
import { useState, useEffect } from 'react'
import fetchData from "../data/api";

const TotalProducts = () => {

  const [productos, setproductos] = useState([])

  useEffect(() => {
    const fetchAllData = async () => {
      const productsData = await fetchData('https://fakestoreapi.com/products');
      setproductos(productsData);
    };
    fetchAllData();
  }, []);

  if (productos.length === 0) {
    return <h1>Llamar a proveedores. Ya no hay más productos</h1>
  }
  
  const numproductos = productos[productos.length - 1]

  return (
    <>
      <h1>Total de productos de la tienda</h1>
      <p className="total-productos">{numproductos.id}</p>
    </>
  );  
}

export default TotalProducts