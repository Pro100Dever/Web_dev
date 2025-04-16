import express from 'express'

const app = express()
app.use(express.json())

const URL = 'http://127.0.0.1'
const PORT = 3000
class PATH {
  HOME = '/'
  USERS = '/users'
  SEARCH = '/search'
}
const path = new PATH()

app.get(path.HOME, (req, res) => {
  res.send('Welcome to my site!')
})
app.get(path.USERS, (req, res) => {
  res.send('List of users')
})
app.get(path.SEARCH, (req, res) => {
  const query = req.query
  console.log(query)
  res.send(`Query sting: ${query.id ? query.id : 'none'}`)
})

app.get(`${path.USERS}/:id`, (req, res) => {
  const param = req.params.id
  console.log(param)
  res.send(`User ID: ${param ? param : 'none'}`)
})

app.listen(PORT, () => {
  console.log(`Server is listening: ${URL}:${PORT}`)
})
