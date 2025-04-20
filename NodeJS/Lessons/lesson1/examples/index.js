const http = require('http')
// import

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/plain')
    res.end('Home Page')
  }
  if (req.url === '/about') {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/plain')
    res.end('About Page')
  }
  if (req.url === '/contact') {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/plain')
    res.end('Contact Page')
  }
})

server.listen(5555, '127.0.0.1', () => {
  console.log('Server is listening on port http://127.0.0.1:5555/')
})
