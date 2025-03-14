import { CircularProgress, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setCurrentTrack, togglePlay } from '../../redux/slices/playerSlice'
import { loadSettings, saveSettings } from '../../redux/slices/settingsSlice'
import { fetchTracks } from '../../redux/slices/tracksSlice'
import TrackInfo from '../TrackInfo'
import Controls from './Controls'
import ProgressBar from './ProgressBar'

export default function Player() {
  const tracks = useSelector(state => state.tracks.tracks)
  const currID = useSelector(state => state.player.currentId)
  const status = useSelector(state => state.tracks.status)
  const currentId = useSelector(state => state.player.currentId)
  const mode = useSelector(state => state.settings.mode)
  const currentTime = useSelector(state => state.player.currentTime)
  const dispatch = useDispatch()

  let currentTrack = tracks.find(track => track.id === currentId)
  if (!currentTrack) {
    currentTrack = tracks[0]
  }

  function getShuffle() {
    let randomTrackId = null
    do {
      randomTrackId = Math.floor(Math.random() * tracks.length)
    } while (tracks[randomTrackId].id === currID)
    // console.log('curRan', tracks[randomTrackId].id)
    dispatch(setCurrentTrack(tracks[randomTrackId].id))
  }

  useEffect(() => {
    dispatch(fetchTracks())
    dispatch(loadSettings())
  }, [dispatch])

  useEffect(() => {
    dispatch(saveSettings())
  }, [dispatch])

  useEffect(() => {
    if (currentTrack) {
      if (currentTime === currentTrack.duration) {
        const currentIndex = tracks.findIndex(track => track.id === currentId)

        switch (mode) {
          case 'shuffle':
            getShuffle()
            break
          case 'repeat':
            dispatch(setCurrentTrack(currentId))
            break
          default:
            if (currentIndex !== tracks.length - 1) {
              dispatch(setCurrentTrack(tracks[currentIndex + 1].id))
            } else {
              dispatch(togglePlay())
            }
            break
        }
      }
    }
  }, [currentTime])

  if (status === 'loading') {
    return <CircularProgress />
  }
  if (!tracks.length) {
    return <Typography variant='h2'>No tracks yet</Typography>
  }

  return (
    <div>
      <TrackInfo track={currentTrack} />
      <Controls getShuffle={getShuffle} />
      <ProgressBar duration={currentTrack.duration} />
    </div>
  )
}
