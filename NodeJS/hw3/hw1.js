const fs = require('fs')

fs.mkdir('myFolder', err => {
  if (err) {
    console.log('error create folder')
    return
  }
  console.log('successfully create folder')

  fs.rmdir('myFolder', err => {
    if (err) {
      console.log('error delete folder')
      return
    }
    console.log('successfully delete folder')
  })
})
