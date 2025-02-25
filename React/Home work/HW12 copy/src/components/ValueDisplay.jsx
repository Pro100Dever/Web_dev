import React from 'react'

export default function ValueDisplay({ value, prevValue }) {
  return (
    <>
      <h3>Value: {value}</h3>
      <h3>Prev value: {prevValue}</h3>
    </>
  )
}
