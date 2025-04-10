const path = require('path')
const fs = require('fs')

const originsPathToLogs = path.join(__dirname, 'logs')

fs.readdir(originsPathToLogs, (err, files) => {
  if (err) {
    console.log(err.message)
    return
  }
  console.log('successfully', files)

  files.forEach(file => {
    const originsPathToFile = path.join(originsPathToLogs, file)
    fs.readFile(originsPathToFile, 'utf-8', (err, data) => {
      if (err) {
        console.log(err.message)
        return
      }

      const content = data
        .split('\n')
        .map(line => line.trim())
        .filter(Boolean)

      const usersLogsObj = {}

      for (let i = 0; i < content.length; i++) {
        const action = content[i]

        if (usersLogsObj[action]) {
          usersLogsObj[action]++
        } else {
          usersLogsObj[action] = 1
        }
      }
      console.log(file, ':')
      const newObj = Object.entries(usersLogsObj)
      newObj.forEach(item => {
        console.log(`  ${item[0]}: ${item[1]}`)
      })
    })
  })
})
