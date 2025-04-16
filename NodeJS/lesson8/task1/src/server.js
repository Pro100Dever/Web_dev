import 'dotenv/config.js'
import express from 'express'
import sequelize from './config/db.js'
import User from './models/Users.js'

const app = express()
app.use(express.json())

const PORT = process.env.PORT || 3333
app.get('/', (req, res) => {
  res.status(200).json({ message: 'Hello, sequelize!' })
})

const createUsers = async () => {
  try {
    const newUser = await User.create({
      name: 'John Doe4',
      username: 'Johnny4',
      email: '12211@gmail.com',
    })
    console.log(newUser)
  } catch (error) {
    console.error(`Error: ${error}`)
  }
}

const getAllUsers = async () => {
  try {
    const users = await User.findAll()
    console.log('All users', users)
  } catch (error) {
    console.error(`Error: ${error}`)
  }
}

app.listen(PORT, async () => {
  try {
    await sequelize.authenticate()
    createUsers()
    getAllUsers()
    console.log('successfully connected to DB')
    console.log(`server is running on port http://127.0.0.1:${PORT}`)
  } catch (error) {
    console.error(`Error: ${error} `)
  }
})
// npx sequelize-cli migration:generate --name create-user-table
