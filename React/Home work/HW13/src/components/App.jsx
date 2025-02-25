import React from 'react'
import { Provider } from 'react-redux'
import store from '../redux/store'
import Filter from './Filter'
import UserList from './UserList'

function App() {
  return (
    <Provider store={store}>
      <h2>Redux filter</h2>
      <Filter />
      <UserList />
    </Provider>
  )
}

export default App
