import 'dotenv/config'
import express, { type Application, type Request, type Response } from 'express'
import connectDB from './db/db'
import { errHandler } from './middleware/errHandler.middleware'
import taskRouter from './routes/task.routes'

const app: Application = express()
app.use(express.json())
app.use('/api', taskRouter)
app.use(errHandler)

const PORT: number | string = process.env.PORT || 3000

app.get('/', (req: Request, res: Response) => {
  res.json({ message: 'Home' })
})

connectDB()
  .then(() => {
    app.listen(PORT, (): void => {
      console.log('Server is running on PORT: http://127.0.0.1:' + PORT)
    })
  })
  .catch((err: unknown) => {
    console.error('Failed to start the server due to mongoDB error ', err)
  })
