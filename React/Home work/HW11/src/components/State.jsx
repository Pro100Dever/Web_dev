import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import style from './State.module.css'

export default function State() {
  const location = useLocation()
  const stateData = location.state

  console.log(location)

  return (
    <>
      <div className={style.form}>
        <h3>{stateData.title}</h3>
        <p>{stateData.description}</p>
        <span>{location.pathname}</span>
      </div>
      <Link to='/stateList' className={style.button}>
        Back to State List
      </Link>
      <Link to='/' className={style.button}>
        Home
      </Link>
    </>
  )
}
