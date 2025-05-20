import express from 'express'
import {
  getAllUsers,
  loginUser,
  registerUser,
} from '../controllers/userControllers.js'

const router = express.Router()

router.post('/login', loginUser)
router.post('/register', registerUser)
router.get('/users', getAllUsers)

export default router
