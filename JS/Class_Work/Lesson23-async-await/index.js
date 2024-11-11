async function fetchPosts() {
  const url = `https://jsonplaceholder.typicode.com/posts`
  const respons = await fetch(url)
  const data = await respons.json()
  console.log(data)
}
// fetchPosts()
//====================================
// async function fetchUsers() {
//   const url = `https://jsonplaceholder.typicode.com/users`
//   const respons = await fetch(url)
//   const data = await respons.json()
//   console.log(data)
// }
// fetchUsers()
//================================
async function fetchToDos(id) {
  const url = `https://jsonplaceholder.typicode.com/todos/${id ? id : ''}`
  const respons = await fetch(url)
  const data = await respons.json()
  console.log(data)
}
// fetchToDos()

// Создать функцию, которая будет отправлять несколько асинхронных запросов на сервер параллельно, используя Promise.all. Дождаться выполнения всех запросов и вернуть массив результатов в том порядке, в котором они были отправлены.
// Использовать новый синтаксис(async/await) в этой во всех последующих задачах.
const urls = [
  'https://jsonplaceholder.typicode.com/todos',
  'https://jsonplaceholder.typicode.com/comments',
  'https://jsonplaceholder.typicode.com/users',
]

async function fetchAll(params) {
  const response = await params.map(url => fetch(url))
  const allResponses = await Promise.all(response)
  const formatResponses = allResponses.map(arr => arr.json())
  const datas = await Promise.all(formatResponses)
  console.log(datas)
}
// fetchAll(urls)

const list = document.createElement('ul')
document.body.append(list)

async function fetchUsers() {
  const url = `https://jsonplaceholder.typicode.com/users`
  const respons = await fetch(url)
  const data = await respons.json()
  data.forEach(user => renderUsersList(user))
  // return data
}

async function renderUsersList(user) {
  // const users = await fetchUsers()
  // users.forEach(user => {
  const listItem = document.createElement('li')
  const h3 = document.createElement('h3')
  const p = document.createElement('p')

  h3.innerText = user.username
  p.innerText = user.email

  listItem.append(h3, p)
  list.append(listItem)
  // })
}
// renderUsersList()
fetchUsers()
