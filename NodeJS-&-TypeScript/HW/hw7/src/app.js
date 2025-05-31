import 'dotenv/config.js'
import express from 'express'
import sequelize from './config/db.js'
import App from './models/App.js'

const app = express()
app.use(express.json())

const PORT = process.env.PORT || 3333
app.get('/', (req, res) => {
  res.status(200).json({ message: 'Hello, sequelize!' })
})

const createApps = async () => {
  try {
    const newApp = await App.create({
      id: 1,
      name: 'Johnny',
      size: 23,
    })
    console.log(newApp)
  } catch (error) {
    console.error(`Error: ${error}`)
  }
}

const getAllApps = async () => {
  try {
    const apps = await App.findAll()
    console.log('All books', apps)
  } catch (error) {
    console.error(`Error: ${error}`)
  }
}

app.listen(PORT, async () => {
  try {
    await sequelize.authenticate()
    createApps()
    getAllApps()
    console.log('successfully connected to DB')
    console.log(`server is running on port http://127.0.0.1:${PORT}`)
  } catch (error) {
    console.error(`Error: ${error} `)
  }
})
// npx sequelize-cli migration:generate --name create-user-table
