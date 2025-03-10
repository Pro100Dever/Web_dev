import React, { useState } from 'react'
import CartContext from './cart-context'

const CartProvider = () => {
  const [cart, setCart] = useState([])

  function addToCart(product) {
    setCart([...cart, { ...product, quantity: 1 }])
  }
  function removeFromCart(product) {
    setCart(cart.filter(item => item.id !== product.id))
  }
  function updateQuantity(product, quantity) {
    setCart(
      cart.map(item => (item.id === product.id ? { ...item, quantity } : item))
    )
  }
  function clearCart() {
    setCart([])
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
      }}
    ></CartContext.Provider>
  )
}

export { CartProvider }
