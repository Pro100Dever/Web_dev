import axios from 'axios'
import { useEffect, useState } from 'react'

export default function UserProfile() {
  const [loading, setLoading] = useState(false)
  const [user, setUser] = useState('')

  useEffect(() => {
    fetchUser()
  }, [])

  function getRandomUser(users) {
    const randomIndex = Math.floor(Math.random() * users.length)
    return users[randomIndex]
  }

  function handleClick() {
    fetchUser()
  }

  if (loading) {
    return <div>Loading...</div>
  }

  async function fetchUser() {
    try {
      setLoading(true)
      const usersData = await axios.get(
        'https://jsonplaceholder.typicode.com/users'
      )
      const randUser = getRandomUser(usersData.data)
      setUser(randUser)
      setLoading(false)
      console.log(randUser)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      <img src={user} alt='icon' />

      <h3>{user.name}</h3>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>

      <button onClick={handleClick}>Load new user</button>
    </div>
  )
}
