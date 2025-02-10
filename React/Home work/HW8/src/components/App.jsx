import { useEffect, useState } from 'react'
import ListItems from './ListItems'

function App() {
  const [items, setItems] = useState([])
  const [inputValue, setInputValue] = useState('')

  function addItem() {
    setItems([...items, inputValue])
    setInputValue('')
  }

  useEffect(() => {
    console.log('Компонент ListItems обновлен')
  }, [])

  // useEffect(() => {
  //   console.log('Компонент ListItems обновлен')
  // }, [items])

  return (
    <>
      <input
        type='text'
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
        placeholder='Type here'
      />
      <button onClick={addItem}>Add event</button>
      <ul>
        <ListItems items={items} />
      </ul>
    </>
  )
}

export default App
