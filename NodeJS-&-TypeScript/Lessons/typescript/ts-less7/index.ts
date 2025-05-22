import axios from 'axios'

async function fn1(str: string): Promise<string> {
  //промис видит что значения с задержкой, но выполняет сразу возвращая undefined потому что функция fn1 не предназначена сразу для возвращения промиса
  return new Promise<string>((res, rej) => {
    const randomizer = Math.random() > 0.5

    setTimeout(() => {
      if (randomizer) {
        res(str)
      } else {
        rej('hello')
      }
    }, 2000)
  })
}

// fn1('hello world')
//     .then(res => console.log(res))

// console.log(fn1('hello'))

// async function res() {
//   try {
//     const result = await fn1('hello from async function')
//     console.log(result)
//   } catch (e) {
//     console.log(e)
//   }
// }

// console.log(res());
// res()
// .then((res) => {
//   console.log(res);
// });

function fakeApiCall(): Promise<string> {
  return new Promise((res, rej) => {
    const rand = Math.floor(Math.random() * 10) % 2 === 0
    console.log(rand)
    setTimeout(() => {
      if (rand) {
        res('successfully fetch data from API -_-')
      } else {
        rej('error fetch data from API ')
      }
    }, 1500)
  })
}

async function getData() {
  try {
    console.log(await fakeApiCall())
  } catch (error) {
    console.log(error)
  } finally {
    console.log('finally')
  }
}
// getData()

///////////////////////

function delay(time: number): Promise<string> {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('Hallo')
    }, time)
  })
}
// delay(1000).then(message => console.log(message))

function squareAsync(num: number): Promise<number> {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(num ** 2)
    }, 500)
  })
}
// squareAsync(3).then(message => console.log(message))

function loadUser(): Promise<string> {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('users')
    }, 1000)
  })
}
function loadPosts(): Promise<string> {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('posts')
    }, 2000)
  })
}

function getAll() {
  return Promise.all([loadPosts(), loadUser()])
}

// getAll().then(res => console.log(res))

async function callAll<T>(arr: Array<() => Promise<T>>) {
  try {
    for (const promise of arr) {
      const res = await promise()
      console.log(res)
    }
  } catch (error) {
    console.log(error)
  }
}
// callAll([loadUser, loadPosts])
///////////////////////////////////

interface Task {
  userId: number
  id: number
  title: string
  completed: boolean
}

async function getToDo(id: number, time: number): Promise<Task> {
  try {
    const response = await axios.get<Task>(
      'https://jsonplaceholder.typicode.com/todos/' + id
    )
    if (!response || !response.data) {
      throw new Error('bad request')
    }

    await new Promise(resolve => setTimeout(resolve, time))
    const { data } = response
    return data
  } catch (error) {
    console.log(error)
    throw error
  }
}
// getToDo(1, 1500)
//   .then(res => console.log(res))
//   .catch(err => console.log(err))

//////////////////////////////////////

function getAll2(): Promise<Task[]> {
  return Promise.all([getToDo(1, 1500), getToDo(2, 1000)])
}
getAll2()
  .then(res => console.log(res))
  .catch(err => console.log(err))
