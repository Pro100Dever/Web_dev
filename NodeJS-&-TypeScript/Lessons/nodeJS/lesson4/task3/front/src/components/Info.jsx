import axios from 'axios'
import { useState } from 'react'

export default function Info() {
  const [user, setUsers] = useState({})
  const [isActive, setIsActive] = useState(false)

  async function handleClick() {
    try {
      const { data } = await axios.get('http://127.0.0.1:3000/user')
      setUsers(data)
      console.log(data)
    } catch (error) {
      console.error(`Error: ${error}`)
    }
    setIsActive(!isActive)
  }

  return (
    <>
      <h3>InfoAboutME</h3>
      <button onClick={handleClick}>Click</button>
      {isActive && (
        <ul>
          <li>
            <h3>{`Name: ${user.name}`}</h3>
            <p>{`Age: ${user.age}`}</p>
            <p>{`Status: ${user.status}`}</p>
          </li>
        </ul>
      )}
    </>
  )
}
