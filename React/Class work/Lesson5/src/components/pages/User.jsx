import { Link } from 'react-router-dom'
export default function User() {
  const users = [
    { id: 1, name: 'John Doe', age: 28, bio: 'Software Developer' },
    { id: 2, name: 'Jane Smith', age: 34, bio: 'Graphic Designer' },
    { id: 3, name: 'Bob Johnson', age: 45, bio: 'Project Manager' },
  ]
  return (
    <>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            <Link to={`/users/${user.id}`}>{user.name}</Link>
          </li>
        ))}
      </ul>
    </>
  )
}
