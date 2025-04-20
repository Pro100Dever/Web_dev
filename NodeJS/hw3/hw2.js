const fs = require('fs')

const text = 'abc'

fs.writeFile('info.txt', text, (err, data) => {
  if (err) {
    console.log('error write')
    return
  }
  console.log('success write')
})

fs.readFile('info.txt', 'utf-8', (err, data) => {
  if (err) {
    console.log('error read')
    return
  }
  console.log('success read: ' + data)
})
