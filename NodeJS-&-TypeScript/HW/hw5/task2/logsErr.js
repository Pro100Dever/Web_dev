import fs from 'fs'
import http from 'http'

const server = http.createServer((req, res) => {
  try {
    const authHeader = req.headers['authorization']

    if (!authHeader) {
      throw new Error('Authorization header missing')
    }

    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify({ message: 'Authorization header received' }))
  } catch (error) {
    fs.appendFile('errors.log', error.message, err => {
      if (err) {
        console.log('error write error')
      }
      console.log('success write error to logs: ' + error.message)
    })

    res.statusCode = 500
    res.setHeader('Content-Type', 'text/plain')
    res.end(JSON.stringify({ error: 'Internal Server Error' }))
  }
})

server.listen(3000, () => {
  console.log(`Server is listening: http://127.0.0.1:3000`)
})
