import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchDogs } from '../redux/thunks'

export default function DogsComponent() {
  const dispatch = useDispatch()
  const { data, status, error } = useSelector(state => state.dogs)

  useEffect(() => {
    dispatch(fetchDogs())
  }, [dispatch])

  return (
    <div>
      <h1>Dogs</h1>
      {status === 'loading' && <h3>Loading...</h3>}
      {status === 'failed' && <p>{error}</p>}
      {status === 'succeeded' && (
        <ul>
          {data.map(dog => (
            <li key={dog.id}>{dog.attributes.name}</li>
          ))}
        </ul>
      )}
    </div>
  )
}
