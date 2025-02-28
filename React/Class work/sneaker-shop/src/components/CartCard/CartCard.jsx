import { useContext } from 'react'
import deleteIcon from '../../assets/delete.svg'
import { CartContext } from '../../context/CartContext'

import {
  Actions,
  AddButton,
  Amount,
  Card,
  Image,
  Price,
  PriceContainer,
  Title,
} from './CartCard.styles'

export default function CartCard({ product }) {
  const { image, name, price, id } = product
  const { deleteToCart } = useContext(CartContext)
  console.log(product)
  console.log(image, name, price)

  return (
    <Card>
      <Actions>
        <Image src={image} alt={name} />
        <Title>{name}</Title>
        <PriceContainer>
          <Price>PRICE:</Price>
          <Amount>{price}</Amount>
        </PriceContainer>
      </Actions>
      <AddButton onClick={() => deleteToCart(id)}>
        <img src={deleteIcon} alt='deleteIcon' />
      </AddButton>
    </Card>
  )
}
