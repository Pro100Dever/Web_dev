import { Button, Typography } from '@mui/material'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getQuote } from '../features/quote/quoteSlice'

export default function Quote() {
  const dispatch = useDispatch()
  const { quote } = useSelector(state => state.quote)
  const { isLoading, isError, isSuccess, message } = useSelector(
    state => state.quote
  )

  function handleClick() {
    dispatch(getQuote())
  }

  useEffect(() => {
    handleClick()
  }, [])

  return (
    <div>
      {isLoading && <Typography>...Loading</Typography>}
      {isError && <Typography>{message}</Typography>}
      {isSuccess && (
        <>
          <Typography variant='subtitle1' gutterBottom sx={{ marginLeft: 3 }}>
            {/* если по заданию то там будет quote.q */}
            {`"${quote.quote}"`}
          </Typography>
          <Typography variant='h6' gutterBottom sx={{ textAlign: 'end' }}>
            {/* если по заданию то там будет quote.a */}
            {`- Kanye West`}
          </Typography>
        </>
      )}

      <Button variant='outlined' onClick={handleClick}>
        New Quote
      </Button>
    </div>
  )
}
