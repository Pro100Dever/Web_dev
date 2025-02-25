import React, { useEffect, useRef, useState } from 'react'
import ValueDisplay from './ValueDisplay'

function App() {
  const [value, setValue] = useState('')

  function handleChange(e) {
    setValue(e.target.value)
  }
  const prevValue = useRef()

  useEffect(() => {
    prevValue.current = value
  }, [value])

  return (
    <>
      <h2>Current and Previous Value</h2>
      <input type='text' placeholder='some' onChange={handleChange} />
      <ValueDisplay value={value} prevValue={prevValue.current} />
    </>
  )
}

export default App
