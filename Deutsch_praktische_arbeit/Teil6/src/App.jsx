import { useEffect, useState } from 'react'

import axios from 'axios'

const fetchMockComments = async () => {
  return axios
    .get('/fake-api/comments', {
      validateStatus: () => true,
    })
    .then(() => ({ data: mockComments }))
}
const updateMockComment = async (id, newText) => {
  return axios
    .put(
      `/fake-api/comments/${id}`,
      { text: newText },
      {
        validateStatus: () => true,
      }
    )
    .then(() => ({ data: { id, text: newText } }))
}
const deleteMockComment = async id => {
  return axios
    .delete(`/fake-api/comments/${id}`, {
      validateStatus: () => true,
    })
    .then(() => ({ data: { success: true } }))
}

function App() {
  const [allComments, setAllComments] = useState([])
  const [filteredComments, setfilteredCommentss] = useState([])
  const [userFilter, setUserFilter] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchMockComments = async () => {
      try {
        const { data } = await fetchMockComments()
        setAllComments(prev => [...prev, data])
        setfilteredCommentss(prev => [...prev, data])
      } catch (error) {
        console.log(setError(error))
      }
    }
  }, [])
}

export default App
