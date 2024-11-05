/* const p1 = new Promise(res => res('hello world'))
console.log(p1)

p1.then(res => console.log(res))
//============================
fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(res => res.json())
  .then(data => console.log(data))

async function fetchFn() {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos')
  const data = await res.json()
  console.log(data)
}
fetchFn()
//================================
fetch('https://jsonplaceholder.typicode.com/todos', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    title: 'HELLO VLADIMIR',
    completed: true,
  }),
})
  .then(res => res.json())
  .then(res => console.log(res))
 */
// fetch('https://jsonplaceholder.typicode.com/todos')
//   .then(res => res.json())
//   .then(data => console.log(data.map(item => item.id)))
fetch('https://jsonplaceholder.typicode.com/todos')
  .then(res => res.json())
  .then(data => data.map(item => console.log(item.id)))
