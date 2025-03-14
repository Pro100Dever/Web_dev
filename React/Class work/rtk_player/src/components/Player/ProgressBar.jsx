import { Box, Slider, Typography } from '@mui/material'
import { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setCurrentTime } from '../../redux/slices/playerSlice'

export default function ProgressBar({ duration }) {
  const dispatch = useDispatch()
  const currentTime = useSelector(state => state.player.currentTime)
  const isPlaying = useSelector(state => state.player.isPlaying)
  const currTimeRef = useRef()

  useEffect(() => {
    if (isPlaying && currentTime < duration) {
      currTimeRef.current = setInterval(() => {
        dispatch(setCurrentTime(currentTime + 1))
      }, 1000)
    }

    return () => clearInterval(currTimeRef.current)
  }, [currentTime, isPlaying])

  // seconds => "mm:ss"
  const formatTime = time => {
    const minutes = Math.floor(time / 60)
    const seconds = time % 60

    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(
      2,
      '0'
    )}`
  }

  const handleChange = (_, newValue) => {
    dispatch(setCurrentTime(newValue))
  }

  return (
    <div>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 0.5 }}>
        <Typography variant='caption' ref={currTimeRef}>
          {formatTime(currentTime)}
        </Typography>
        <Typography variant='caption'>{formatTime(duration)}</Typography>
      </Box>
      <Slider
        size='small'
        value={currentTime}
        onChange={handleChange}
        min={0}
        max={duration}
      />
    </div>
  )
}
