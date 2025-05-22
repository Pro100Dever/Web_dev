import type { Request, Response } from 'express'
import type { ITask, ITaskDoc } from '../models/Task.model'
import Task from '../models/Task.model'

const getAllTasks = async (req: Request, res: Response) => {
  try {
    const tasks: ITaskDoc[] = await Task.find()
    if (!tasks) {
      res.status(404).json({ error: 'Tasks not found' })
      return
    }
    res.status(200).json({ message: 'Found', tasks })
  } catch (error: any) {
    res.status(500).json({ error: error.message })
  }
}

const addNewTask = async (req: Request, res: Response) => {
  try {
    const { title, isCompleted } = req.body as Partial<ITask>
    if (!title) {
      res.status(400).json({ error: 'All data are required' })
      return
    }
    const newTask: ITaskDoc = await Task.create({
      title,
      isCompleted: isCompleted ?? false,
    })
    res.status(201).json({ message: 'Task was created', newTask })
  } catch (error: any) {
    res.status(500).json({ error: error.message })
  }
}
const updateTask = async (req: Request, res: Response) => {
  try {
    const { id } = req.params as { id: string }
    const updated = req.body as Partial<ITask>
    const updatedTask: ITaskDoc | null = await Task.findByIdAndUpdate(
      id,
      updated,
      { new: true }
    )
    if (!updatedTask) {
      res.status(404).json({ error: 'Task not found' })
      return
    }
    res.status(200).json({ message: 'Task was updated', updatedTask })
  } catch (error: any) {
    res.status(500).json({ error: error.message })
  }
}

const deleteTask = async (req: Request, res: Response) => {
  try {
    const { id } = req.params as { id: string }
    const deletedTask: ITaskDoc | null = await Task.findByIdAndDelete(id)
    if (!deletedTask) {
      res.status(404).json({ error: 'Task not found' })
      return
    }
    res.status(200).json({ message: 'Task was deleted', deletedTask })
  } catch (error: any) {
    res.status(500).json({ error: error.message })
  }
}

export { addNewTask, deleteTask, getAllTasks, updateTask }
