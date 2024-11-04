const pp1 = new Promise((res, rej) => {
  setTimeout(res, 100, 'John')
})
const pp2 = 'Jane'
const pp3 = Promise.resolve(33)
const pp4 = Promise.reject('error')

Promise.all([pp1, pp2, pp3, pp4])
  .then(res => console.log(res))
  .catch(error => console.log(error))

function newPromise(value, time) {
  return new Promise((res, rej) =>
    value ? setTimeout(res, time, value) : rej('error data')
  )
}

// Promise.resolve(value)
// Принимает: начение с которым будет выполнен промис.
// Dозвращает: выполненный промис
//=======================================
// Promise.reject(reason)
// Принимает: Причина по которой Promise был отклонён.
// Dозвращает: объект Promise, который был отклонён по указанной причине

//===============Promise.all===============
// Вернет масив ответов если нет ошибок или ошибку
const fetchData1 = newPromise('first', 2000)
const fetchData2 = newPromise('two', 1500)
const fetchData3 = newPromise('undefined', 1000)

Promise.all([fetchData1, fetchData2, fetchData3])
  .then(res => console.log(res))
  .catch(error => console.log(error))

//============Promise.allSettled===========
//Вернет масив промисов {status, res/rej}
const p1 = new Promise((res, rej) => setTimeout(res, 1500, 'Hello p1'))
const p2 = Promise.resolve('Hello p2')
const p3 = Promise.reject('error p3')

Promise.allSettled([p1, p2, p3])
  .then(res => console.log(res))
  .catch(error => console.log(error))

//===============.race=========================
//Вернет вообще любой 1-й ответ промисов
const fetchDataFast = newPromise('.race data fast', 500)
const fetchDataSlow = newPromise('.race data slow', 2000)

Promise.race([fetchDataSlow, fetchDataFast])
  .then(res => console.log(res))
  .catch(error => console.log(error))

//================.any========================
//Вернет 1-й успешный ответ промисов
const tryOperation1 = newPromise('.any tryOperation1', 1000)
const tryOperation2 = newPromise(undefined, 500)
const tryOperation3 = newPromise('.any tryOperation3', 1500)

Promise.any([tryOperation1, tryOperation2, tryOperation3])
  .then(res => console.log(res))
  .catch(error => console.log(error))
