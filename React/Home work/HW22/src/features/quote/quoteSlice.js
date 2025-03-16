import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const API_URL = 'https://api.kanye.rest/'
//'https://zenquotes.io/api/random' - не работает (там что-то cors не пускает и выдает ошибку)
export const getQuote = createAsyncThunk('quote/getQuote', async () => {
  try {
    const response = await axios.get(API_URL)
    return response.data
  } catch (error) {
    console.log(error)
  }
})

const quoteSlice = createSlice({
  name: 'quote',
  initialState: {
    quote: null,
    isLoading: false,
    isError: false,
    isSuccess: false,
    message: '',
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getQuote.pending, state => {
        state.isLoading = true
      })
      .addCase(getQuote.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.quote = action.payload
      })
      .addCase(getQuote.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload.message
      })
  },
})
export default quoteSlice.reducer
