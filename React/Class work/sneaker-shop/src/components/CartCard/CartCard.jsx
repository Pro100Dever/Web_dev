import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import {
  Actions,
  AddButton,
  Amount,
  Card,
  Image,
  Price,
  Title,
} from '../ProductCard/ProductCard.styles.js'

export default function CartCard({ item }) {
  console.log(item)

  const { image, name, price, id } = item
  const { deleteToCart } = useContext(CartContext)

  return (
    <>
      <Card>
        <Image src={image} alt={name} />
        <Title>{name}</Title>
        <Actions>
          <div>
            <Price>PRICE:</Price>
            <Amount>{price}</Amount>
          </div>
          <AddButton onClick={() => deleteToCart(id)}>-</AddButton>
        </Actions>
      </Card>
    </>
  )
}
