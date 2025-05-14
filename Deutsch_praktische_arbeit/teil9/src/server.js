import 'dotenv/config'
import express from 'express'
import { connectToDatabase } from './db/db.js'
import userRoutes from './routes/userRoutes.js'

const app = express()
app.use(express.json())
app.use('/api', userRoutes)

const PORT = process.env.PORT

connectToDatabase()
  .then(() => {
    app.listen(PORT, () => {
      console.log('Server is running: http://127.0.0.1:' + PORT)
    })
  })
  .catch(err => {
    console.error('Failed start server', err)
  })
