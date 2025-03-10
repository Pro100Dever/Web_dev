import './App.css'
import ProductList from './context/ProductList'
import CartContext from './context/cart-context'

function App() {
  return (
    <CartContext>
      <ProductList />
    </CartContext>
  )
}

export default App
