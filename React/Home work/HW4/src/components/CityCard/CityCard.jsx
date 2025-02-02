/* eslint-disable react/prop-types */
import styles from './CitySelector.module.css'
export default function CityCard({ city }) {
  return (
    <div>
      <h3 className={styles.name}>{city[0].name}</h3>
      <img src={city[0].imageUrl} alt='img' />
      <p>{city[0].description}</p>
      <ul>
        {!city[0].facts
          ? ''
          : city[0].facts.map((fact, index) => <li key={index}>{fact}</li>)}
      </ul>
    </div>
  )
}
