import 'dotenv/config'
import express from 'express'
import sequelize from './config/db.js'
import User from './models/Users.js'
// import Product from './models/Products.js'

const app = express()
app.use(express.json())

const PORT = process.env.PORT || 3333
class URL {
  HOME = '/'
  USERS = '/users'
  PRODUCTS = '/products'
}
const url = new URL()

app.get(url.HOME, (req, res) => {
  res.send('HOME')
})

app.post(url.USERS, async (req, res) => {
  try {
    const data = req.body
    if (!data.email) {
      res.status(500).json({ error: 'Does not required data' })
      return
    }
    const newUser = await User.create(data)
    res.status(201).json({ message: 'Successfully created ' + newUser })
  } catch (error) {
    res.status(500).json({ error: 'Does not required data \n' + error })
  }
})
app.get(url.USERS, async (req, res) => {
  try {
    const allUsers = await User.findAll()
    res.status(200).json({ message: 'success get users ', allUsers })
  } catch (error) {
    res.status(500).json({ error })
  }
})

app.listen(PORT, async () => {
  try {
    await sequelize.authenticate()
    console.log('successfully connected to DB')
    console.log(`Server is listening http://localhost:${PORT}`)
  } catch (error) {
    console.error(`Error: ${error}`)
  }
})
