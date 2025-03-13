import { configureStore } from '@reduxjs/toolkit'
import { tokenExpiredMiddleware } from './middlewares'
import authReducer from './slices/authSlice'

const store = configureStore({
  reducer: {
    auth: authReducer,
  },
  middleware: getDefaultMiddleware => {
    getDefaultMiddleware().concat(tokenExpiredMiddleware)
  },
})

export default store
