import 'dotenv/config'
import fs from 'fs'

fs.writeFile(process.env.FILENAME, 'any text', 'utf-8', err => {
  if (err) {
    console.log('error create file')
    return
  }
  console.log('successfully create')

  fs.readFile(process.env.FILENAME, 'utf-8', (err, data) => {
    if (err) {
      console.log('error read file')
      return
    }
    console.log('Text: ' + data)
  })
})
