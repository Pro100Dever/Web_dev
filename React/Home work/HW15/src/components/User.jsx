import React from 'react'
import { connect } from 'react-redux'

function User({ username, status }) {
  return (
    <>
      <h3>User Info</h3>
      <p>Name: {username}</p>
      <p>Status: {status}</p>
    </>
  )
}

const mapStateToProps = state => {
  return {
    username: state.username,
    status: state.status,
  }
}
export default connect(mapStateToProps)(User)
