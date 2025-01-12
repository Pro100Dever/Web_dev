import Greeting from './components/Greeting'
import OrderStatus from './components/OrderStatus'
import ShoppingList from './components/ShoppingList'

const arr = ['bike', 'moto', 'toy', 'ball']
const statusArr = [
  { orderId: 123, status: 'в пути' },
  { orderId: 125, status: 'обработан' },
  { orderId: 127, status: 'доставлен' },
]

export default function App() {
  return (
    <>
      <Greeting name='Volodymyr' />
      <ShoppingList items={arr} />
      <OrderStatus orders={statusArr} />
    </>
  )
}
