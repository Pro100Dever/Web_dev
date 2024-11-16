async function getToDo() {
  const response = await fetch(`https://jsonplaceholder.typicode.com/todos/1`)
  const data = await response.json()
  console.log(data)
}
getToDo()

async function getPost(limit) {
  const url =
    'https://jsonplaceholder.typicode.com/posts' +
    (limit ? '?_limit=' + limit : '')
  const response = await fetch(url)
  const data = await response.json()
  console.log(data)
}
getPost(10)
