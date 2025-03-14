import { configureStore } from '@reduxjs/toolkit'
import playerReducer from './slices/playerSlice'
import settingsReducer from './slices/settingsSlice'
import tracksReducer from './slices/tracksSlice'

const store = configureStore({
  reducer: {
    tracks: tracksReducer,
    player: playerReducer,
    settings: settingsReducer,
  },
})

export default store
