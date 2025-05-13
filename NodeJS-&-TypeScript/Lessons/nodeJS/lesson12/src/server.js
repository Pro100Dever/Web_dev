import 'dotenv/config'
import express from 'express'
import sequelize from './config/db.js'
import User from './models/user.js'

const app = express()
app.use(express.json())

const PORT = process.env.PORT || 3000

app.get('/users', async (req, res) => {
  try {
    const usersList = await User.findAll()
    if (!usersList) {
      return res.status(404).json({ error: 'Users not found' })
    }
    res.json({ users: usersList })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

app.post('/users', async (req, res) => {
  const { email, username, name, password, age } = req.body
  try {
    if (!email || !username || !name || !password || !age) {
      return res.status(400).json({ error: 'Haven\t all req data' })
    }
    const newUser = await User.create({ email, username, name, password, age })
    res.status(201).json({ message: 'User was created', newUser })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

app.listen(PORT, async () => {
  try {
    await sequelize.authenticate()
    console.log(`server is listening: http://127.0.0.1:${PORT}`)
  } catch (error) {
    console.error(`Error: ${error}`)
  }
})
