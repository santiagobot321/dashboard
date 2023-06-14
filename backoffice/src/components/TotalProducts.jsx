import React from 'react'
import fetchProductos from '../data/products'
import { useState, useEffect } from 'react'

const TotalProducts = () => {

  const [producto, setproducto] = useState([])
  useEffect(() => {
    fetchProductos()
    .then(datos => {
      setproducto(datos)
    })
  }, [])

  if (producto.length === 0) {
    return <h1>Llamar a proveedores. Ya no hay más productos</h1>
  }
  
  const numproductos = producto[producto.length - 1]

  return (
    <>
      <h1>Total de productos de la tienda</h1>
      <p className="total-productos">{numproductos.id}</p>
    </>
  );  
}

export default TotalProducts