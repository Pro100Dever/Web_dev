import express from 'express'
import { db } from './db.js'

const app = express()
app.use(express.json())

app.get('/', (req, res) => {
  try {
    res.send('Hello, World!')
  } catch (error) {
    return res.status(404).json({ error })
  }
})
app.post('/', async (req, res) => {
  try {
    const data = req.body
    if (!data) {
      return res.status(500).json({ error: 'error data' })
    }
    res.status(200).json({ message: 'success post', data })
  } catch (error) {
    return res.status(500).json({ error })
  }
})

app.get('/products', (req, res) => {
  try {
    db.query('SELECT * FROM products', (err, results) => {
      if (err) {
        return res.status(500).json({ error: 'Error connecting to the db' })
      }
      res.json(results)
    })
  } catch (error) {
    return res.status(404).json({ error })
  }
})

app.post('/products', (req, res) => {
  const { name, price } = req.body
  if (!name || !price) {
    return res.status(400).json({ error: 'Field name is required' })
  }
  console.log(req.body)
  const sql = 'INSERT INTO products (name, price) VALUES (?, ?)'
  db.query(sql, [name, price], (err, result) => {
    if (err) {
      return res.status(500).json({ error: 'Error adding product' })
    }
    res
      .status(201)
      .json({ message: 'Product was added', id: result.insertId, name, price })
  })
})

app.listen(3000, () => {
  console.log('Server is listening: http://localhost:3000')
})
