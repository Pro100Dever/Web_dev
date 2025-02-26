import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import {
  Actions,
  AddButton,
  Amount,
  Card,
  Image,
  Price,
  Title,
} from './ProductCard.styles.js'

export default function ProductCard({ product }) {
  const { image, name, price } = product
  const { addToCart } = useContext(CartContext)

  return (
    <Card>
      <Image src={image} alt={name} />
      <Title>{name}</Title>
      <Actions>
        <div>
          <Price>PRICE:</Price>
          <Amount>{price}</Amount>
        </div>
        <AddButton onClick={() => addToCart(product)}>+</AddButton>
      </Actions>
    </Card>
  )
}
