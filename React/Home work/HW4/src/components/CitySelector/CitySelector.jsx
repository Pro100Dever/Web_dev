/* eslint-disable react/prop-types */
export default function CitySelector({ cities, currentCity, handleChange }) {
  return (
    <>
      <h3>Выберите город:</h3>
      <select id='city-select' value={currentCity} onChange={handleChange}>
        {cities.map((city, index) => (
          <option value={city.name} key={index}>
            {city.name}
          </option>
        ))}
      </select>
    </>
  )
}
