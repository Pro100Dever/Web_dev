const http = require('http')
const { url } = require('./path.js')

const PORT = 3000

const server = http.createServer((req, res) => {
  switch (req.url) {
    case url.HOME:
      res.statusCode = 200
      res.setHeader('Content-Type', 'text/plain')
      res.end('Welcome to the Home Page!')
      break
    case url.ABOUT:
      res.statusCode = 200
      res.setHeader('Content-Type', 'text/plain')
      res.end('About Us')
      break

    default:
      res.statusCode = 404
      res.end('404 Not Found')
      break
  }
})

server.listen(PORT, '127.0.0.1', () => {
  console.log(`Server is listening on port http://127.0.0.1:${PORT}/`)
})
