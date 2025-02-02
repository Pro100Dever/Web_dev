import { useState } from 'react'
import Answer from '../Answer/Answer'
import styles from './MathQuitz.module.css'

export default function MathQuiz() {
  const [currentScore, setCurrentScore] = useState(0)
  let randNum1 = Math.floor(Math.random() * 100)
  let randNum2 = Math.floor(Math.random() * 100)

  function updatePoints(complieted) {
    !complieted
      ? setCurrentScore(prev => prev - 1)
      : setCurrentScore(prev => prev + 1)
  }

  return (
    <div className={styles.container}>
      <h3>Ваши очки: {currentScore}</h3>
      <p>
        {randNum1} + {randNum2} = ?
      </p>
      <Answer num1={randNum1} num2={randNum2} updatePoints={updatePoints} />
    </div>
  )
}
