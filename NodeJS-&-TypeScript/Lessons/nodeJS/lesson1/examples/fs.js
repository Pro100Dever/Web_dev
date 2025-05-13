const fs = require('fs')

fs.writeFile('example.txt', 'Example file text', (err, data) => {
  if (err) {
    console.log('error create')
    return
  }
  console.log('success created')

  fs.readFile('example.txt', 'utf-8', (err, data) => {
    if (err) {
      console.log('error data')
      return
    }
    console.log(`text: ${data}`)
  })

  fs.unlink('example.txt', err => {
    if (err) {
      console.log('err delete')
      return
    }
    console.log('successfully delete')
  })
})
