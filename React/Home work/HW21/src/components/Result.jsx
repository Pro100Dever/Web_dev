import { Typography } from '@mui/material'
import { useSelector } from 'react-redux'

export default function Result() {
  const { result } = useSelector(state => state.questions)

  return (
    <>
      {result !== null && (
        <Typography variant='h3' gutterBottom>
          Your Score: {result}{' '}
        </Typography>
      )}
    </>
  )
}
