import { createSlice } from '@reduxjs/toolkit'
import { fetchDogs } from './thunks'

const dogsSlice = createSlice({
  name: 'dogs',
  initialState: {
    data: [],
    status: 'idle',
    error: null,
  },
  reducer: {},
  extraReducers: builder => {
    builder.addCase(fetchDogs.pending, state => {
      state.status = 'loading'
    })
    builder.addCase(fetchDogs.fulfilled, (state, action) => {
      state.status = 'succeeded'
      console.log(action.payload)
      state.data = action.payload
    })
    builder.addCase(fetchDogs.rejected, (state, action) => {
      state.status = 'failed'
      state.error = action.error.message
      console.log(action.error.message)
    })
  },
})

export default dogsSlice.reducer
