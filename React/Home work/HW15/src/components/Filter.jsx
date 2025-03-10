import React, { useCallback } from 'react'

function Filter({ setFilter, filter }) {
  const filterUsers = event => {
    const value = event.target.value
    setFilter(value)
  }
  const handleChange = useCallback(filterUsers, [setFilter])

  return (
    <>
      <input
        type='text'
        value={filter}
        placeholder='Search...'
        onChange={handleChange}
      />
    </>
  )
}

export default Filter
