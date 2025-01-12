import Greeting from './components/Greeting'
import ShoppingList from './components/ShoppingList'
const arr = ['bike', 'moto', 'toy', 'ball']
export default function App() {
  return (
    <>
      <Greeting name='Volodymyr' />
      <ShoppingList items={arr} />
    </>
  )
}
