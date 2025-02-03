import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Login({ onLogin }) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()

  function handleSubmit(e) {
    e.preventDefault()
    if (username === 'admin' && password === 'admin') {
      onLogin()
      navigate('/users')
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor='username'>Username</label>
        <input
          type='text'
          id='username'
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor='password'>Password</label>
        <input
          type='password'
          id='password'
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
      </div>
      <button type='submit'>Login</button>
    </form>
  )
}
