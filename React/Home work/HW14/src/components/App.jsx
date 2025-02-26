import React from 'react'
import { Provider } from 'react-redux'
import store from '../redux/store'
import User from './User'
import UserForm from './UserForm'

function App() {
  return (
    <Provider store={store}>
      <h2>User Profile</h2>
      <User />
      <UserForm />
    </Provider>
  )
}

export default App
