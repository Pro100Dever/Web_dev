import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <>
      <h3>Home</h3>
      <Link to='/stateList'>StateList</Link>
    </>
  )
}
