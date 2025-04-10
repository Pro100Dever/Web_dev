const fs = require('fs')
const path = require('path')

// fs.readFile('./hello.txt', 'utf-8', (err, data) => {
//   if (err) {
//     console.log('Error reading file:', err)
//     return
//   }
//   console.log('File content:', data)
// })

// fs.writeFile('./input.txt', 'input txt', err => {
//   if (err) {
//     console.log('Error writing file:', err)
//     return
//   }
//   console.log('File written successfully')
// })

/////////////////////////////////////////

// setTimeout(() => {
//   console.log('hello')
// }, 3000)

// try {
//   fs.writeFileSync('example.txt', 'hello example', 'utf-8')
//   console.log('File was created')
// } catch (error) {
//   console.error('Error occurred writing file.')
// }

// try {
//   const data = fs.readFileSync('example.txt', 'utf-8')
//   console.log(data)
// } catch (error) {
//   console.error('Error occurred reading file. Possible no such a file')
// }

// console.log('The end')

// function customWriteFileSync(name, lastName, age) {
//   return `${name} - ${lastName} - ${age}`
// }

// console.log(customWriteFileSync(98, 'john', 'smith'))

// const readStream = fs.createReadStream('./hello.txt', 'utf-8')
// const writeStream = fs.createWriteStream('./output.txt', 'utf-8')

// readStream.pipe(writeStream)

// readStream.on('finish', () => {
//   console.log('Copy finished')
// })
// readStream.on('error', err => {
//   console.log('error', err)
// })
// writeStream.on('error', err => {
//   console.log('error', err)
// })

/////////////////////////////////////////

const dirPath = path.join(__dirname, 'testDir')
fs.mkdir(dirPath, err => {
  if (err) {
    console.log('Error creating directory:', err)
    return
  }
  console.log('Directory created successfully')
  const testDir = path.join(dirPath, 'example.txt')

  fs.writeFile(testDir, 'hello', 'utf-8', err => {
    if (err) {
      console.log('Error writing file:', err)
      return
    }
    console.log('File created successfully')

    fs.readdir(dirPath, (err, file) => {
      if (err) {
        console.log('Error reading directory:', err)
        return
      }
      console.log('Directory content:', file)
    })
  })
})
