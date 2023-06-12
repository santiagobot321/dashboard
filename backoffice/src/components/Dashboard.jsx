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

