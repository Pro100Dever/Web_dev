import React from 'react'
import { Provider } from 'react-redux'
import UserList from './components/UserList'
import store from './redux/store'

function App() {
  return (
    <Provider store={store}>
      <UserList />
    </Provider>
  )
}

export default App
