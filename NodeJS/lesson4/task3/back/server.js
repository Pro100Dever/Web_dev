import cors from 'cors'
import express from 'express'

const app = express()
app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello Main Page')
})
app.get('/user', (req, res) => {
  res.json({
    name: 'Name',
    age: '100',
    status: 'online',
  })
})

app.listen(3000, () => {
  console.log(' Server is listening on port http://127.0.0.1:3000')
})
