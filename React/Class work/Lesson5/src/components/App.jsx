import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './Navbar'
import Error from './pages/Error404'
import Home from './pages/Home'
import Login from './pages/Login'
import ProtectedRoute from './pages/ProtectedRoute'
import User from './pages/User'
import UserProfile from './pages/UserProfile'

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  function handleLogin() {
    setIsAuthenticated(true)
  }

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route
          path='/users'
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <User />
            </ProtectedRoute>
          }
        />
        <Route
          path='/users/:id'
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <UserProfile />
            </ProtectedRoute>
          }
        />
        <Route path='/login' element={<Login onLogin={handleLogin} />} />
        <Route path='*' errorElement={<Error />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
