import mongoose from 'mongoose'
import { transactionSchema } from './Transaction.js'

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
    unique: true,
  },
  password: {
    type: String,
    require: true,
  },

  initialBalance: {
    type: Number,
    default: 100,
    required: true,
  },
  currentBalance: {
    type: Number,
    required: true,
  },
  transactions: [transactionSchema],
})

const User = mongoose.model('User', userSchema)
export { User }
