import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function ProtectedRoute({ isAuthenticated, children }) {
  const navigate = useNavigate()

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login')
    }
  }, [isAuthenticated, navigate])

  return children
}
