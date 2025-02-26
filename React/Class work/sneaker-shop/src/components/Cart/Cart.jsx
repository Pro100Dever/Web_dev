import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import CartCard from '../CartCard/CartCard'

export default function Cart() {
  const { cartItems } = useContext(CartContext)

  return (
    <>
      {cartItems.length === 0 ? (
        <h2>Empty</h2>
      ) : (
        cartItems.map((item, index) => (
          <CartCard item={item} key={item.id ? item.id : index} />
        ))
      )}
    </>
  )
}
