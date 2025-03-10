import React, { useContext, useState } from 'react'
import CartContext from './cart-context'
import ProductItem from './ProductItem'

const products = [
  { id: 1, name: 'Produkt 1', price: 10 },
  { id: 2, name: 'Produkt 2', price: 20 },
  { id: 3, name: 'Produkt 3', price: 30 },
]

function ProductList() {
  const [productsList] = useState(products)
  const { addToCart } = useContext(CartContext)

  console.log(productsList)
  return (
    <ul>
      {productsList.map(product => (
        <ProductItem product={product} addToCart={addToCart} />
      ))}
    </ul>
  )
}
export default ProductList
