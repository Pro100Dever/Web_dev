import { configureStore } from '@reduxjs/toolkit'
import dogsReducer from './dogsSlice'

const store = configureStore({
  reducer: {
    dogs: dogsReducer,
  },
})

export default store
