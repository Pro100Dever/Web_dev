const fs = require('fs')

function logMessage(text) {
  fs.appendFile('log.txt', text, (err, data) => {
    if (err) {
      console.log('error create')
      return
    }
    console.log('successfully create')
  })
}

module.exports = {
  logMessage,
}
