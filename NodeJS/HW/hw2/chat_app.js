const EventEmitter = require('events')
const emitter = new EventEmitter()

function sendMessage(name, sms, emitter) {
  emitter.emit('message', name, sms)
}
function createSms(name, sms) {
  console.log(`${name}:${sms}`)
}

emitter.on('message', createSms)
sendMessage('Alex', 'sbc', emitter)
sendMessage('Alex2', 'ggg', emitter)
sendMessage('Alex3', 'bbb', emitter)
