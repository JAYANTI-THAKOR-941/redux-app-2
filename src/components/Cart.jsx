import React from 'react'
import { useSelector } from 'react-redux'

const Cart = () => {

    const count = useSelector(state=>state.count)

  return (
    <div>
        <h1>Cart</h1>
        <h2>{count}</h2>
    </div>
  )
}

export default Cart