/* console.log('Null')

setTimeout(() => {
  setTimeout(() => {
    console.log('One')
  }, 1000)
  setTimeout(() => {
    console.log('Two')
  }, 0)
  console.log('Free')
}, 1000)

console.log('Four')
 */

// setTimeout(() => {
//   console.log('hello world чуть попозже')
// }, 3000)

// function intervalFn(exactNum, delay) {
//   let result = exactNum
//   const counter = setInterval(() => {
//     if (result > 0) {
//       console.log('hello world', result)
//       result--
//     } else {
//       console.log('this is the end of interval')
//       clearInterval(counter)
//     }
//   }, delay)
// }
// intervalFn(5, 1000)

// Это финальная точка асинхронности
// const fetchUsers = async ( )=> {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json()
//         console.log(data);

//     } catch(e) {
//         throw new Error(e)
//     }
// }
// fetchUsers()

const a = 5
const b = 10

function promiseFn(x, y) {
  return new Promise((resolve, reject) => {
    if (x < y) {
      resolve(')))) yes)))))')
    } else {
      reject('x can not be more than y')
    }
  })
}
promiseFn(a, b)
  .then(result => {
    // Если все ок. result - это результат resolve
    console.log(result)
  })
  .catch(error => {
    // Если условие не выполнено. error - это результат reject
    console.log(error)
  })
  .finally(() => {
    // Работает в любом случае
    console.log('Ну это все)')
  })

function checkEvenNumber(num) {
  return new Promise((resolve, reject) => {
    num % 2 === 0 ? resolve('Number even') : reject('Number odd')
  })
}

checkEvenNumber(5)
  .then(res => console.log(res))
  .catch(err => console.log(err))

//============================================================

const form = document.querySelector('.form')
const list = document.createElement('dl')

const todos = localStorage.getItem('task')
  ? JSON.parse(localStorage.getItem('task'))
  : []

form.addEventListener('submit', e => {
  e.preventDefault()
  const taskValue = e.target['task'].value
  const descriptionValue = e.target['description'].value

  const newTask = {
    taskValue,
    descriptionValue,
  }

  todos.push(newTask)
  localStorage.setItem('task', JSON.stringify(todos))
  const taskArr = JSON.parse(localStorage.getItem('task'))
  console.log(taskArr)

  render()
})

function render() {
  list.innerHTML = ''
  todos.forEach(element => {
    const listTitle = document.createElement('dt')
    const listDescription = document.createElement('dd')
    listTitle.innerText = element.taskValue
    listDescription.innerText = element.descriptionValue
    list.append(listTitle, listDescription)
    form.insertAdjacentElement('afterend', list)
  })
}
