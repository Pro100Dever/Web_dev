const cars = [
  { id: 1, brand: 'BMW', model: 'X5', year: 2021, color: 'Черный' },
  {
    id: 2,
    brand: 'Mercedes',
    model: 'E-Class',
    year: 2020,
    color: 'Серебристый',
  },
  { id: 3, brand: 'Audi', model: 'Q7', year: 2022, color: 'Белый' },
  { id: 4, brand: 'Tesla', model: 'Model 3', year: 2021, color: 'Красный' },
  { id: 5, brand: 'Toyota', model: 'Camry', year: 2019, color: 'Синий' },
]

function CarsList(props) {
  console.log(Object.getOwnPropertyDescriptor(props, 'size'))
  // и нельзя переписакть дескриптор пропсу
  return (
    <>
      <h2>Cars list</h2>
      <ul>
        {cars.map(a => (
          <li key={a.id}>
            <h3>
              {a.brand} {a.model}
            </h3>
            <p>
              {a.year} года, {a.color} цвет
            </p>
          </li>
        ))}
      </ul>
    </>
  )
}

export default CarsList
