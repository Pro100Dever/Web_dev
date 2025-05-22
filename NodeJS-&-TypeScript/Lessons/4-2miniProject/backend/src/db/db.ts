import 'dotenv/config'
import { connect } from 'mongoose'

const connectionString =
  process.env.MONGO_URI ||
  'mongodb+srv://Pro100Dev:ZJAZkVZUNZDIuY6u@cluster0.nz5n9.mongodb.net/MiniProj_BD'

const connectDB = async () => {
  try {
    await connect(connectionString)
    console.log('Database is connected')
  } catch (error) {
    console.error(error)
    process.exit(1)
  }
}

export default connectDB
