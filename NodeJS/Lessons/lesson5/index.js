import 'dotenv/config'
import http from 'http'

const userList = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
]

const server = http.createServer((req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Content-Type', 'application/json')

  if (req.url === '/') {
    res.end(JSON.stringify({ message: 'HOME PAGE' }))
    return
  }
  if (req.method === 'GET' && req.url === '/users') {
    res.statusCode = 200
    res.end(JSON.stringify(userList))
  }
  if (req.method === 'POST' && req.url === '/users') {
    let body = ''
    req.on('data', chunk => {
      body += chunk.toString()
    })
    req.on('end', () => {
      try {
        const data = JSON.parse(body)
        if (!data.name || !data.email) {
          res.statusCode = 404
          res.end(JSON.stringify({ error: 'missing required fields' }))
          return
        }

        const id = userList.length + 1
        userList.push({ name: data.name, email: data.email, id })

        res.statusCode = 201
        // res.end(JSON.stringify([...userList, { name, email }]))
        res.end(JSON.stringify({ message: 'user was created', userList }))
      } catch (error) {
        console.error(`Error: ${error} `)
      }
    })
    return
  }
  res.statusCode = 404
  res.end(JSON.stringify({ message: 'NOT FOUND' }))
})

server.listen(process.env.PORT || 3000, () => {
  console.log(`Server is listening: http://127.0.0.1:${process.env.PORT}`)
})
