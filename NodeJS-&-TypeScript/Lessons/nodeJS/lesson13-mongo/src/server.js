import express from 'express'
import { ObjectId } from 'mongodb'
import { connectToDatabase, getDb } from './db/index.js'

const app = express()
app.use(express.json())

const port = process.env.PORT || 3333

app.get('/', (req, res) => {
  res.json({ message: 'hello home page' })
})

app.post('/users', async (req, res) => {
  try {
    const db = getDb()
    const user = req.body
    if (!user.name || !user.email || !user.age) {
      return res.status(400).json({ error: 'All fields are not req' })
    }

    await db.collection('users').insertOne(user)
    res.status(201).json({ message: 'User created', user: user })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

app.get('/users', async (req, res) => {
  try {
    const db = getDb()
    const usersList = await db.collection('users').find().toArray()
    res.json(usersList)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

app.get('/users/:id', async (req, res) => {
  try {
    const db = getDb()
    const userId = req.params.id
    if (!ObjectId) {
      return res.status(400).json({ error: 'invalid user ID' })
    }
    const user = await db
      .collection('users')
      .findOne({ _id: new ObjectId(userId) })
    if (!user) {
      return res.status(404).json({ error: 'user not found' })
    }
    res.status(200).json(user)
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch users' })
  }
})

app.put('/users/:id', async (req, res) => {
  try {
    const db = getDb()
    const userId = req.params.id
    const updateData = req.body

    if (!ObjectId.isValid(userId)) {
      return res.status(400).json({ error: 'invalid user ID' })
    }
    const result = await db
      .collection('users')
      .updateOne({ _id: new ObjectId(userId) }, { $set: updateData })
    if (result.matchCount === 0) {
      return res.status(404).json({ error: 'User not found' })
    }

    res
      .status(200)
      .json({ message: 'User was successfully updated', newData: updateData })
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: 'Error changing user' })
  }
})

app.delete('/users/:id', async (req, res) => {
  try {
    const db = getDb()
    const userId = req.params.id
    if (!ObjectId.isValid(userId)) {
      return res.status(400).json({ error: 'invalid user ID' })
    }
    const result = await db
      .collection('users')
      .deleteOne({ _id: new ObjectId(userId) })
    if (result.matchCount === 0) {
      return res.status(404).json({ error: 'User not found' })
    }
    res.status(200).json({ message: 'User was successfully deleted' })
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: 'Error changing user' })
  }
})

connectToDatabase()
  .then(() => {
    app.listen(port, () => {
      console.log('Server is running: http://127.0.0.1:' + port)
    })
  })
  .catch(err => {
    console.error('Failed to start the server due to mongoDB error ', err)
  })
