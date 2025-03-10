function ProductItem({ product, addToCart }) {
  return (
    <li>
      <h3>Name: {product.name}</h3>
      <p>Price: {product.price}</p>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </li>
  )
}
export default ProductItem
