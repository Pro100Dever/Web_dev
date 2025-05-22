import { Router } from 'express'
import {
  addNewTask,
  deleteTask,
  getAllTasks,
  updateTask,
} from '../controllers/task.controller'

const router: Router = Router()

router.get('/get', getAllTasks)
router.post('/add', addNewTask)
router.put('/update/:id', updateTask)
router.delete('/delete/:id', deleteTask)

export default router
