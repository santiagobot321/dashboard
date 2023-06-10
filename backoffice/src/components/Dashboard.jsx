import React from 'react'
import MasVend from './MasVend'
import PedidosReal from './PedidosReal'
import PrecioPom from './PrecioPom'
import TotalIngre from './TotalIngre'
import TotalProducts from './TotalProducts'

const Dashboard = () => {
  return (
    <>
    <h1>Dashboard</h1>
        <MasVend />
        <PedidosReal />
        <PrecioPom />
        <TotalIngre />
        <TotalProducts />    
    </>
    
  )
}

export default Dashboard

// // Número total de productos en la tienda
// Número total de pedidos realizados
// Ingresos totales generados
// Precio promedio de los productos
// Productos más vendidos (según el número de pedidos)