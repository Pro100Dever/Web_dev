import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

// Создаем асинхронное действие
// export const fetchPosts = createAsyncThunk(
//   'posts/fetchPosts',
//   async () => {
//     const response = await axios.get('https://example.com')
//     return response.data; // Возвращаем данные, полученные в ответ.
//     // Это и сохраняется в state
//   }
// )

// export const createPost = createAsyncThunk(
//   'posts/createPost',
//   async () => {
//     const response = await axios.post('https://example.com', {
//       id: 100,
//       text: 'Lorem ipsum'
//     })
//     return response.data
//   }
// )

export const fetchDogs = createAsyncThunk('data/fetchData', async () => {
  const response = await axios.get('https://dogapi.dog/api/v2/breeds')
  return response.data.data
})
