import 'dotenv/config'
import express from 'express'
import { connectToDatabase } from './db/index.js'
import prodRoutes from './routes/productRoutes.js'

const app = express()
app.use(express.json())
app.use('/api/products', prodRoutes)

const PORT = process.env.PORT || 3333

app.get('/', (req, res) => {
  res.json({ message: 'hello home page' })
})

connectToDatabase()
  .then(() => {
    app.listen(PORT, () => {
      console.log('Server is running on PORT ' + `http://127.0.0.1:` + PORT)
    })
  })
  .catch(err => {
    console.error('Failed to start the server due to mongoDB error ', err)
  })
