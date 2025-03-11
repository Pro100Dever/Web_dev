import { createContext, useState } from 'react'

// interface Task {
//     id: number;
//     title: string;
//     description? : string
//   }

export const TaskContext = createContext()

export function TaskProvider({ children }) {
  const [tasks, setTasks] = useState([
    {
      id: '1',
      title: 'Erste Aufgabe',
      description: 'Beschreibung der ersten Aufgabe',
    },
    {
      id: '2',
      title: 'Zweite Aufgabe',
      description: 'Beschreibung der zweiten Aufgabe',
    },
  ])
  const addTask = task => {
    setTasks([...tasks, { ...task, id: Date.now() }])
  }
  const editTask = (id, updatedTask) => {
    setTasks(
      tasks.map(task => (id === task.id ? { ...task, ...updatedTask } : task))
    )
  }
  const deleteTask = id => {
    setTasks(tasks.filter(task => task.id !== id))
  }
  return (
    <TaskContext.Provider value={(addTask, editTask, deleteTask)}>
      {children}
    </TaskContext.Provider>
  )
}
