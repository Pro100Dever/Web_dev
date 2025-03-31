const http = require('http')

const server = http.createServer((req, res) => {
  //   if (req.url === '/') {
  res.statusCode === 200
  res.setHeader('Content-Type', 'text/plain')
  res.end('Hello NodeJS!')
  //   }
})

server.listen(3000, '127.0.0.1', () => {
  console.log('Server is listening on port http://127.0.0.1:3000/')
})
