import { createSlice } from '@reduxjs/toolkit'

const usersSlice = createSlice({
  name: 'users',
  initialState: [
    { username: 'Alice', email: 'alice@exaple.com' },
    { username: 'Bob', email: 'bob@exaple.com' },
    { username: 'Charlie', email: 'charlie@exaple.com' },
  ],
  reducer: {},
})

export default usersSlice.reducer
