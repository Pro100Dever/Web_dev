const path = require('path')

class URL {
  HOME = '/'
  USER = '/user'
  DOCUMENTS = '/user/documents'
}
const url = new URL()
const file = 'example.txt'

const fullPath = path.join(url.DOCUMENTS, file)
const fileExt = path.extname(fullPath)

console.log('Full Path ', fullPath)
console.log('Full Extension ', fileExt)
