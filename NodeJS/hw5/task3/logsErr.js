import http from 'http'

const server = http.createServer((req, res) => {
  if (req.url === '/' && req.method === 'PUT') {
    res.statusCode = 200
    res.setHeader(`Content-Type`, `text/plain`)
    res.end(JSON.stringify({ message: 'PUT-запрос обработан' }))
  }
  if (req.url === '/' && req.method === 'DELETE ') {
    res.statusCode = 200
    res.setHeader(`Content-Type`, `text/plain`)
    res.end(JSON.stringify({ message: 'DELETE-запрос обработан' }))
  }
})

server.listen(3000, () => {
  console.log(`Server is listening: http://127.0.0.1:3000`)
})
