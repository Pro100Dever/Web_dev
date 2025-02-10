export default function ListItems(items) {
  return (
    <>
      {items.items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </>
  )
}
