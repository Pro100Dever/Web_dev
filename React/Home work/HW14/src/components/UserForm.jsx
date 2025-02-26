import React from 'react'
import { connect } from 'react-redux'
import { setUserInfo } from '../redux/action'

function UserForm({ setUserInfo }) {
  function handleSubmit(event) {
    event.preventDefault()
    const isOnlyLetters = /^[a-zA-Z]+$/.test(event.target[0].value)
    if (event.target[0].length > 2 || (isOnlyLetters && isOnlyLetters)) {
      if (
        event.target[1].value === 'online' ||
        event.target[1].value === 'offline'
      ) {
        setUserInfo(event.target[0].value, event.target[1].value)
      } else {
        console.log('Status must be online or offline')
      }
    } else {
      console.log('Name must be at least 3 characters and only letters')
    }
  }

  return (
    <>
      <h3>Edit User Info</h3>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type='text' required />
        </label>
        <br />
        <label>
          Status:
          <input type='text' required />
        </label>
        <br />
        <button>Save</button>
      </form>
    </>
  )
}

export default connect(null, { setUserInfo })(UserForm)
