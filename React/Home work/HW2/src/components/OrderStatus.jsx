export default function Lists(props) {
  return (
    <>
      {props.orders.map(item => (
        <p>
          Заказ #{item.orderId}: {item.status}.
        </p>
      ))}
    </>
  )
}
