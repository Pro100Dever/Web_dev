import bcrypt from 'bcrypt'
import 'dotenv/config'
import express from 'express'
import jwt from 'jsonwebtoken'
import sequelize from './config/db.js'
import authMiddleware from './midlware/authMiddleware.js'
import User from './models/user.js'

const app = express()
app.use(express.json())

const PORT = process.env.PORT || 3333

app.post('/register', async (req, res) => {
  const { email, password } = req.body
  try {
    if (!email || !password) {
      return res.status(400).json({ error: "haven't req data" })
    }

    const user = await User.findOne({ where: { email } })
    if (user) {
      return res.status(400).json({ error: 'User already exists' })
    }

    const hashedPass = await bcrypt.hash(password, 10)
    const newUser = await User.create({
      email,
      password: hashedPass,
    })
    res.status(201).json({ message: 'User was created', user: newUser })
  } catch (error) {
    res.status(500).json({ error })
  }
})

app.post('/login', async (req, res) => {
  const { email, password } = req.body
  try {
    if (!email || !password) {
      return res.status(400).json({ error: 'Write correct email and pass' })
    }
    const user = await User.findOne({ where: { email } })
    if (!user) {
      return res.status(404).json({ error: 'User not found' })
    }
    const isMatch = await bcrypt.compare(password, user.password)
    if (!isMatch) {
      return res.status(401).json({ error: 'incorrect password' })
    }
    const token = jwt.sign(
      { id: user.id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    )
    res.status(200).json({ message: 'Login successful', token })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

app.get('/result', authMiddleware, async (req, res) => {
  const user = await User.findByPk(req.user.id)
  res.json({ message: `final hello`, id: user.id })
})

app.listen(PORT, async () => {
  try {
    await sequelize.authenticate()
    console.log(`Server is listening: http://127.0.0.1:${PORT}`)
  } catch (error) {
    console.error(`Error: ${error}`)
  }
})
