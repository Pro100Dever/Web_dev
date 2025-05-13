import http from 'http'

const server = http.createServer((req, res) => {
  const authHeader = req.headers['authorization']

  res.setHeader('Content-Type', 'text/plain')

  if (!authHeader) {
    res.statusCode = 401
    res.end(JSON.stringify({ error: 'Unauthorized' }))
    return
  } else {
    res.statusCode = 200
    res.end(JSON.stringify({ message: 'Authorization header received' }))
  }
})

server.listen(3000, () => {
  console.log(`Server is listening: http://127.0.0.1:3000`)
})
