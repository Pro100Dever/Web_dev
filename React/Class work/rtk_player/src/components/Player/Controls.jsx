import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setCurrentTrack, togglePlay } from '../../redux/slices/playerSlice'
import { setPlayingMode } from '../../redux/slices/settingsSlice'

export default function Controls({ getShuffle }) {
  const currID = useSelector(state => state.player.currentId)
  const isPlaying = useSelector(state => state.player.isPlaying)
  const tracks = useSelector(state => state.tracks.tracks)
  const mode = useSelector(state => state.settings.mode)
  const dispatch = useDispatch()

  console.log(currID)

  const handlePrevTrack = () => {
    let currTrackIdx = null
    if (currID === null) {
      currTrackIdx = 0
    } else {
      currTrackIdx = tracks.findIndex(track => track.id === currID)
    }

    if (mode === 'shuffle') {
      getShuffle()
    } else {
      //Проблема

      if (currTrackIdx !== 0) {
        const prevTrack = tracks[currTrackIdx - 1]
        dispatch(setCurrentTrack(prevTrack.id))
      } else {
        console.log('1-th track')
      }
    }
  }

  const handleNextTrack = () => {
    let currTrackIdx = null
    if (currID === null) {
      currTrackIdx = 0
    } else {
      currTrackIdx = tracks.findIndex(track => track.id === currID)
    }

    if (mode === 'shuffle') {
      getShuffle()
    } else {
      //Проблема

      if (currTrackIdx !== tracks.length - 1) {
        const nextTrack = tracks[currTrackIdx + 1]
        dispatch(setCurrentTrack(nextTrack.id))
      } else {
        console.log('last track')
      }
    }
  }

  const handleModChange = e => {
    e.preventDefault()
    dispatch(setPlayingMode(e.target.value))
  }

  return (
    <div>
      <div>
        <button onClick={handlePrevTrack}>Previous</button>
        <button onClick={() => dispatch(togglePlay())}>
          {isPlaying ? 'Pause' : 'Play'}
        </button>
        <button onClick={handleNextTrack}>Next</button>
      </div>
      <FormControl>
        <FormLabel id='demo-radio-buttons-group-label'>Mode</FormLabel>
        <RadioGroup
          aria-labelledby='demo-radio-buttons-group-label'
          value={mode}
          name='radio-buttons-group'
          onChange={handleModChange}
        >
          <FormControlLabel value='normal' control={<Radio />} label='Normal' />
          <FormControlLabel
            value='shuffle'
            control={<Radio />}
            label='Shuffle'
          />
          <FormControlLabel value='repeat' control={<Radio />} label='Repeat' />
        </RadioGroup>
      </FormControl>
    </div>
  )
}
