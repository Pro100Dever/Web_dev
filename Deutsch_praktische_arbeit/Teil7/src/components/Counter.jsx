import { useRef, useState } from 'react'

function Counter() {
  const [counter, setCounter] = useState(0)
  const [stepCount, setStepCount] = useState(1)
  const counterRef = useRef(null)

  function handlePlus() {
    setCounter(prev => prev + Number(stepCount))
  }
  function handleMinus() {
    if (counter > 0) {
      setCounter(prev => prev - Number(stepCount))
    }
  }
  function handleChange(e) {
    setStepCount(e.target.value)
  }

  return (
    <div>
      <h3 ref={counterRef}>{counter >= 0 ? counter : setCounter(0)}</h3>
      <button onClick={handleMinus}>Minus</button>
      <button onClick={handlePlus}>Plus</button>
      <br />
      <input type='number' value={stepCount} onChange={handleChange} min='1' />
    </div>
  )
}

export default Counter
