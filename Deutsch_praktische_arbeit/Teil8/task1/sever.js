import http from 'http'
import url from 'url'

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true)
  const path = parsedUrl.pathname
  const parts = path.split('/').filter(Boolean)

  if (parts[0] === 'user' && parts[1]) {
    const username = parts[1]
    res.writeHead(200, { 'content-type': 'text/plain' })
    res.end(`Hello, ${username}!`)
  } else if (parts[0] === 'product' && parts[1]) {
    const productName = parts[1]
    res.writeHead(200, { 'content-type': 'text/plain' })
    res.end(`Product ID ${productName}!`)
  } else {
    res.writeHead(404, { 'content-type': 'text/plain' })
    res.end(`404 Not Found`)
  }

  //   switch (parts[0]) {
  //     case 'user':
  //       const username = parts[1]
  //       res.writeHead(200, { 'content-type': 'text/plain' })
  //           res.end(`Hello, ${username}!`)
  //       break
  //     case 'product':
  //       const productName = parts[1]
  //       res.writeHead(200, { 'content-type': 'text/plain' })
  //           res.end(`Product ID ${productName}!`)
  //       break
  //     default:
  //       res.writeHead(404, { 'content-type': 'text/plain' })
  //     res.end(`404 Not Found`)
  //       break
  //   }
})

server.listen(3000, () => {
  console.log('Server: http://127.0.0.1:3000')
})
