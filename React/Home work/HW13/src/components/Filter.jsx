import React from 'react'
import { connect } from 'react-redux'
import { setFilter } from '../redux/action'

function Filter({ setFilter }) {
  const handleChange = event => {
    setFilter(event.target.value)
  }

  return (
    <>
      <input type='text' placeholder='Search...' onChange={handleChange} />
    </>
  )
}

export default connect(null, { setFilter })(Filter)
