import 'dotenv/config'
import express from 'express'
import sequelize from './config/db.js'
import Product from './models/Product.js'
import User from './models/User.js'

const app = express()
app.use(express.json())
const PORT = process.env.PORT || 3333

app.get('/', (req, res) => {
  res.send('HOME')
})

app.post('/users', async (req, res) => {
  try {
    const { name, username, email } = req.body
    if (!email || !name || !username) {
      res.status(500).json({ error: "Haven't  requirement data" })
    }
    const newUser = await User.create({
      name,
      username,
      email,
    })
    res.status(201).json({ message: 'User was successfully created', newUser })
  } catch (error) {
    res.status(500).json({ error: error })
    console.error(`Error: ${error}`)
  }
})

app.post('/products/:id', async (req, res) => {
  try {
    const userId = req.params.id
    const { name, price, description } = req.body
    if (!name || !description) {
      res.status(500).json({ error: "Haven't  requirement data" })
    }
    const newProducts = await Product.create({
      name,
      price,
      description,
      userId,
    })
    res.status(201).json({
      message: 'Product was successfully created',
      newProducts,
    })
  } catch (error) {
    res.status(500).json({ error: error })
    console.error(`Error: ${error}`)
  }
})

app.listen(PORT, async () => {
  try {
    await sequelize.authenticate()
    console.log('Server is listening: http://127.0.0.1:' + PORT)
  } catch (error) {
    console.error(`Error: ${error}`)
  }
})
