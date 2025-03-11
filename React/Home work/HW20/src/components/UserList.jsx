import { useSelector } from 'react-redux'

export default function UserList() {
  const users = useSelector(state => state.users)
  console.log(users)

  return (
    <>
      <h3>User List</h3>
      <ul>
        {users.map((user, index) => (
          <li key={index}>
            {user.username} ({user.email})
          </li>
        ))}
      </ul>
    </>
  )
}
