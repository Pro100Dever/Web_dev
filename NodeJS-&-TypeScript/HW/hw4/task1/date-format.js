const moment = require('moment')

const date1 = moment().format(`DD-MM-YYYY`)
console.log(date1)

const date2 = moment().format(`MMM Do YY`, `dddd`)
console.log(date2)
