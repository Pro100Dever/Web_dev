import React from 'react'
import UserItem from './UserItem'

const users = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
  { id: 3, name: 'Charlie' },
]

function UserList({ filter }) {
  return (
    <>
      {users
        .filter(user => user.name.toLowerCase().includes(filter.toLowerCase()))
        .map(user => (
          <UserItem key={user.id} user={user} />
        ))}
    </>
  )
}

export default UserList
