const EventEmitter = require('events')
const emitter = new EventEmitter()

function doneEvent(data) {
  console.log(data + ' 1')
}
// function doneSecondEvent(data) {
//   console.log(data + ' 2')
// }
// emitter.on('event', doneEvent)
// emitter.on('event', doneSecondEvent)

// emitter.emit('event', 'event')

/////////////////////////////////////

// function createEvent() {
//   emitter.on('event', doneEvent)
// }
// function removeEvent() {
//   emitter.off('event', doneEvent)
// }

// createEvent()
// emitter.emit('event', 'mew event')
// removeEvent()
// emitter.emit('event', 'mew event') // no called

/////////////////////////////////////

// emitter.once('event', doneEvent)
// emitter.emit('event', 'task 3 event')
// emitter.emit('event', 'task 3.1 event')

/////////////////////////////////////

// function handleTick(data) {
//   console.log('left: ' + data + 'sec')
// }

// function countdown(sec, emitter) {
//   let secCount = 0

//   const interval = setInterval(() => {
//     secCount++

//     if (secCount === sec) {
//       emitter.emit('end')
//       emitter.off('tick', handleTick)
//       clearInterval(interval)
//       return
//     }

//     emitter.emit('tick', sec - secCount)
//   }, 1000)
// }

// emitter.on('tick', handleTick)
// emitter.once('end', () => {
//   console.log('time over')
// })
// countdown(5, emitter)

/////////////////////////////////////

// const fs = require('fs')

// function handleNotification(data = '1') {
//   console.log(data)
// }

// function writeFile(data = '1') {
//   fs.appendFile('sms', data + '\n', err => {
//     if (err) {
//       console.log('error create')
//       return
//     }
//     console.log('successfully create')
//   })
// }

// function sendNotification(sms, emitter) {
//   emitter.emit('notification', sms)
// }

// emitter.on('notification', handleNotification)
// emitter.on('notification', writeFile)

// sendNotification('new notification', emitter)
// sendNotification('new 2', emitter)
// sendNotification('new 3', emitter)

/////////////////////////////////////
function writeConsole(status) {
  console.log("U'r status: " + status)
}
function changeUserState(status, emitter) {
  emitter.emit('stateChange', status)
}

emitter.on('stateChange', writeConsole)
changeUserState('online', emitter)
changeUserState('offline', emitter)
changeUserState('undefined', emitter)
