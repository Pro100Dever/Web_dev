const express = require('express')

const app = express()
const PORT = 3000

app.get('/', (req, res) => {
  res.send('Hello Home')
})

app.get('/about', (req, res) => {
  res.send('hello world from about page')
})

app.get('/shop', (req, res) => {
  res.send('hello world from shop page')
})

app.listen(PORT, () => {
  console.log('server is listening on port 3000')
})
