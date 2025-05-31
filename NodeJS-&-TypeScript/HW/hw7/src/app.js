import 'dotenv/config.js'
import express from 'express'
import sequelize from './config/db.js'
import Book from './models/Book.js'

const app = express()
app.use(express.json())

const PORT = process.env.PORT || 3333
app.get('/', (req, res) => {
  res.status(200).json({ message: 'Hello, sequelize!' })
})

const createBooks = async () => {
  try {
    const newBook = await Book.create({
      title: 'Book1',
      author: 'Johnny',
      year: 2002,
    })
    console.log(newBook)
  } catch (error) {
    console.error(`Error: ${error}`)
  }
}

const getAllBooks = async () => {
  try {
    const books = await Book.findAll()
    console.log('All books', books)
  } catch (error) {
    console.error(`Error: ${error}`)
  }
}

app.listen(PORT, async () => {
  try {
    await sequelize.authenticate()
    createBooks()
    getAllBooks()
    console.log('successfully connected to DB')
    console.log(`server is running on port http://127.0.0.1:${PORT}`)
  } catch (error) {
    console.error(`Error: ${error} `)
  }
})
// npx sequelize-cli migration:generate --name create-user-table
