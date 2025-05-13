const fs = require('fs')

function createFile(srcFile, text) {
  fs.writeFileSync(srcFile, text, (err, data) => {
    if (err) {
      console.log('error create')
      return
    }
    console.log('successfully create')
  })
}

function copyFile1(srcFile, srcNewFileName) {
  fs.readFile(srcFile, 'utf-8', (err, data) => {
    if (err) {
      console.log('error Text')
      return
    }
    console.log(data)
    createFile(srcNewFileName, data)
  })
} // var 1

function copyFile2(srcFile, srcNewFile) {
  fs.copyFile(srcFile, srcNewFile, err => {
    if (err) {
      console.log('error Text')
      return
    }
    console.log('Successfully copied')
  })
}

function deleteFile(name) {
  fs.unlink(name, err => {
    if (err) {
      console.log('err delete')
      return
    }
    console.log('successfully delete')
  })
}

createFile('source.txt', 'Source txt Text')
copyFile1('./source.txt', './copy1.txt') //var1
copyFile2('./source.txt', './copy2.txt') //var2
deleteFile('source.txt')
