import React, { useMemo, useState } from 'react'
import Filter from './Filter'
import UserList from './UserList'

function App() {
  const [filter, setFilter] = useState('')

  const expensiveUsers = useMemo(() => {
    return <UserList filter={filter} />
  }, [filter])

  return (
    <>
      <h2>Redux filter</h2>
      <Filter filter={filter} setFilter={setFilter} />
      {expensiveUsers}
    </>
  )
}

export default App
