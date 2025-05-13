const express = require('express')
const { url, PORT } = require('./path.js')

const app = express()

app.get(url.HOME, (req, res) => {
  res.send('Hello Home')
})
app.get(url.ABOUT, (req, res) => {
  res.send('About Pages')
})

app.listen(PORT, () => {
  console.log(`server is listening on port http://127.0.0.1:${PORT}/`)
})
