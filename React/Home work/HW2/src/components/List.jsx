export default function Lists(props) {
  console.log(props.listItem)
  return (
    <>
      {props.listItem.map(a => (
        <li>{a}</li>
      ))}
    </>
  )
}
