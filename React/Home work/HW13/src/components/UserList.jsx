import React from 'react'
import { connect } from 'react-redux'
import UserItem from './UserItem'

function UserList({ users, filter }) {
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

const mapStateToProps = state => {
  return {
    users: state.users,
    filter: state.filter,
  }
}

export default connect(mapStateToProps)(UserList)
