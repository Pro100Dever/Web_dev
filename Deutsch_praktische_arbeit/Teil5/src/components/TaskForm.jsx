import { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { TaskContext } from '../context/TaskContext'

export default function TaskForm() {
  const { task, addTask } = useContext(TaskContext)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: task || { title: '', description: '' },
  })

  const onSubmit = task => {
    addTask(task)
  }
  const handleReset = () => {}
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <>
        <input {...register('title', { required: true, minLength: 3 })} />
        {errors.name && <p>{errors.title.message}</p>}
      </>
      <textarea {...register('description')}></textarea>
      <button>Add</button>
      <button type='button' onClick={handleReset}>
        Reset
      </button>
    </form>
  )
}
