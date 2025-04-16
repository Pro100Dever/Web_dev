import express from 'express'

const app = express()
const PORT = 3000
class URL {
  HOME = '/'
  PRODUCTS = '/products'
  SEARCH = '/search'
}
const url = new URL()

app.get(url.HOME, (req, res) => {
  res.send('Welcome to my site!')
})
app.get(url.PRODUCTS, (req, res) => {
  res.send('List of products')
})
app.get(url.SEARCH, (req, res) => {
  //query string мы можем класть какую либо информацию после маршрута с помощью ?isLogging=true&hehehe=fdala
  const query = req.query
  console.log(query)
  res.send('find something')
})

app.listen(PORT, () => {
  console.log(`Server is listening: http://127.0.0.1:${PORT}`)
})
