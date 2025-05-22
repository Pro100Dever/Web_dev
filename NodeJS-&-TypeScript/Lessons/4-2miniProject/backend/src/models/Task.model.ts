import { Document, model, Schema } from 'mongoose'

export interface ITask {
  title: string
  isCompleted: boolean
  createdAt?: Date
  updatedAt?: Date
}
export interface ITaskDoc extends ITask, Document {}

const taskSchema = new Schema<ITaskDoc>(
  {
    title: {
      type: String,
      required: true,
    },
    isCompleted: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
)
// export const Task = model<ITask>('task', taskSchema)
export default model<ITaskDoc>('task', taskSchema)
