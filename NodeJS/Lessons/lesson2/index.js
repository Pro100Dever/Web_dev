const EventEmitter = require('events')
const emitter = new EventEmitter()
// const alarmClock = new EventEmitter()

// const handlePing = () => {
//   console.log('Пора вставать!')
// }

// alarmClock.on('wakeUp', handlePing)

// alarmClock.once('wakeUp', () => {
//   console.log('Доброе утро, только сегодня я скажу это один раз!')
// })

// alarmClock.emit('wakeUp')
// alarmClock.emit('wakeUp')
// alarmClock.off('wakeUp', handlePing)
// alarmClock.emit('wakeUp')

///////////////////////////////////////

// function getLog(data) {
//   console.log(data)
// }
// emitter.on('log', getLog)
// emitter.emit('log', 'text')

/////////////////////////////////////

// function getWarning(data = 'warning') {
//   console.log(data)
// }
// emitter.once('warning', getWarning)
// emitter.emit('warning', 'warning text')

//////////////////////////////////////

// let count = 0

// function handleClick() {
//   count++
//   if (count >= 5) {
//     console.log('off event')
//     emitter.off('click', handleClick)
//     return
//   }
//   console.log(count)
// }

// emitter.on('click', handleClick)

// for (let i = 0; i < 5; i++) {
//   emitter.emit('click')
// }

//////////////////////////////////////

// let secCount = 0

// const interval = setInterval(() => {
//   secCount++
//   console.log(`los ${secCount} seconds`)
//   if (secCount === 3) {
//     emitter.emit('done', 'Таймер завершён!')
//   }
// }, 1000)

// emitter.once('done', () => {
//   console.log('Time exile')
//   clearInterval(interval)
// })
