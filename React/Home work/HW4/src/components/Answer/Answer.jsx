/* eslint-disable react/prop-types */
import { useState } from 'react'

export default function Answer({ num1, num2, updatePoints }) {
  const [currentAnswer, setCurrentAnswer] = useState('')

  function checkAnswer(e) {
    e.preventDefault()
    ;+currentAnswer === num1 + num2 ? updatePoints(true) : updatePoints(false)
  }

  function handleChange(e) {
    e.preventDefault()
    setCurrentAnswer(e.target.value)
  }

  return (
    <form onSubmit={checkAnswer}>
      <input
        type='text'
        id='answer'
        value={currentAnswer}
        placeholder='Введите ответ'
        onChange={handleChange}
        required
      />
      <button>Проверить</button>
    </form>
  )
}
