import Lists from './List'

export default function ShoppingList(props) {
  console.log(props)
  return (
    <>
      <ul>
        <Lists listItem={props.items} />
      </ul>
    </>
  )
}
