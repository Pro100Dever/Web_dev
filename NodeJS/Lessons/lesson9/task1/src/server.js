import 'dotenv/config.js'
import express from 'express'
import sequelize from './config/db.js'

const app = express()
app.use(express.json())
const PORT = process.env.PORT || 3333

app.get('/', (req, res) => {
  res.status(200).json({ message: 'Hello, sequelize!' })
})

app.listen(PORT, async () => {
  try {
    await sequelize.authenticate()
    console.log('successfully connected to DB')
    console.log(`server is running on port http://127.0.0.1:${PORT}`)
  } catch (error) {
    console.error(`Error: ${error} `)
  }
})
// npx sequelize-cli migration:generate --name create-user-table
