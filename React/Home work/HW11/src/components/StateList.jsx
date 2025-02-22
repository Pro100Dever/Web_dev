import React from 'react'
import { Link } from 'react-router-dom'

const stateObj = [
  { id: 1, title: 'State 1', description: 'Description 1' },
  { id: 2, title: 'State 2', description: 'Description 2' },
]

export default function StateList() {
  return (
    <>
      <h3>StateList</h3>
      <Link to='/'>Home</Link>
      <ul>
        {stateObj.map(state => (
          <li key={state.id}>
            <Link to={`/stateList/${state.id}`} state={state}>
              {state.title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  )
}
