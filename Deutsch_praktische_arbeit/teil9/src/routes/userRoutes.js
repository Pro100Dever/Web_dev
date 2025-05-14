import express from 'express'
import {
  deleteUserId,
  getUserId,
  getUsers,
  postUsers,
  putUsers,
} from '../controllers/userControllers.js'

const router = express.Router()

router.get('/users', getUsers)
router.get('/users/:id', getUserId)
router.post('/users', postUsers)
router.put('/users/:id', putUsers)
router.delete('/users/:id', deleteUserId)

export default router
