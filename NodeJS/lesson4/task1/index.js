// import fs from 'fs'
// import path from 'path'

const path = require('path')
const fs = require('fs')

const originPath = path.join(__dirname, 'mem.png')
const renamePath = path.join(__dirname, 'second.png')
const copyPath = path.join(__dirname, 'copied.png')

fs.rename(originPath, renamePath, err => {
  if (err) {
    console.log('Error renaming file:', err)
    return
  }
  console.log('File renamed successfully')
  fs.copyFile(renamePath, copyPath, err => {
    if (err) {
      console.log('Error copying file:', err)
      return
    }
    console.log('File copied successfully1')
  })
  fs.unlink(renamePath, err => {
    if (err) {
      console.log('Error deleting file:', err)
      return
    }
    console.log('File deleted successfully')
  })
})

// if use renamePath vav = not such file or directory
// fs.copyFile(originPath, copyPath, err => {
//   if (err) {
//     console.log('Error copying file:', err)
//     return
//   }
//   console.log('File copied successfully2')
// })
